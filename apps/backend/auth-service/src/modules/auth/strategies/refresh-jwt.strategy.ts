import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";
import {AuthTokenType} from "src/common/constants/auth-token-type";
import {Request} from "express";


@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(Strategy, 'refresh-jwt-strategy') {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) {

        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (req: Request) => req.cookies.refreshToken
            ]),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_REFRESH_SECRET') as string,
            passReqToCallback: true,
        });
    }

    validate(request: Request): { userId: string, role: string } | boolean {

        const token = request?.cookies?.refreshToken; // Получаем токен из куки
        if (
            !token ||
            !this.jwtService.verify(token, {
                secret: this.configService.get<string>('JWT_REFRESH_SECRET') as string,
            })
        ) {
            return false;
        }

        const { userId, role, type } = this.jwtService.decode(token);

        if (!userId || role || !type) {
            return false;
        }

        if (type !== AuthTokenType.Refresh) {
            return false;
        }

        return { userId: userId, role: role };
    }
}