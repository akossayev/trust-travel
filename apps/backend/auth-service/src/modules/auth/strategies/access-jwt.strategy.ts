import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AuthTokenType } from 'src/common/constants/auth-token-type';

@Injectable()
export class AccessJwtStrategy extends PassportStrategy(
  Strategy,
  'access-jwt-strategy',
) {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_ACCESS_SECRET') as string,
      passReqToCallback: true,
    });
  }

  validate(request: Request): { userId: string; role: string } | boolean {
    const authHeader = request.headers?.['authorization'];

    if (!authHeader) {
      return false;
    }

    const token = authHeader.replace('Bearer ', '').trim();
    if (
      !token ||
      !this.jwtService.verify(token, {
        secret: this.configService.get<string>('JWT_ACCESS_SECRET') as string,
      })
    ) {
      return false;
    }

    const { userId, role, type } = this.jwtService.decode(token);

    if (!userId || !type || !role) {
      return false;
    }

    if (type !== AuthTokenType.Access) {
      return false;
    }

    return { userId: userId, role: role };
  }
}
