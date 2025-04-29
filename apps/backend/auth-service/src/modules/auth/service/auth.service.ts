import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { LoginEmailDTO } from '../dto/login-email.dto';
import { UserService } from '../../users/service/user.service';
import { RegisterUserDTO } from '../dto/register-user.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthTokenType } from '../../../common/constants/auth-token-type';
import { ConfigService } from '@nestjs/config';
import bcrypt from "bcryptjs";
import { LoginCompanyDto } from '../dto/login-company.dto';
import { CompanyService } from '../../users/service/company.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly companyService: CompanyService,
  ) {}

  async loginUser(payload: LoginEmailDTO) {
    const { email, password } = payload;

    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new BadRequestException('Invalid credentials');
    }

    const { accessToken, refreshToken } = await this.generateTokens({
      userId: user.id,
      role: user.role,
    });

    return {
      accessToken: {
        token: accessToken.token,
        expiresIn: accessToken.expiresIn,
      },
      refreshToken: {
        token: refreshToken.token,
        expiresIn: refreshToken.expiresIn,
      },
    };
  }

  async loginCompany(payload: LoginCompanyDto) {}

  async registerUser(payload: RegisterUserDTO) {
    const user = await this.userService.findByEmail(payload.email);
    if (user) {
      throw new BadRequestException(
        `User with email ${user.email} already exists`,
      );
    }
    const userPhone = await this.userService.findByPhone(payload.phone);
    if (userPhone) {
      throw new BadRequestException('User phone must be unique');
    }

    if (payload.password !== payload.confirmPassword) {
      throw new BadRequestException('Password is not match');
    }

    const hashedPassword = await bcrypt.hash(payload.password, 12);

    return await this.userService.insertAndFetchOne({
      ...payload,
      password: hashedPassword,
    });
  }

  async generateTokens(payload: { userId: number; role: string }) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          ...payload,
          type: AuthTokenType.Access,
        },
        {
          secret: this.configService.get('JWT_ACCESS_SECRET'),
          expiresIn: this.configService.get('JWT_ACCESS_EXPIRES_IN') * 1000,
        },
      ),
      this.jwtService.signAsync(
        {
          ...payload,
          type: AuthTokenType.Refresh,
        },
        {
          secret: this.configService.get('JWT_REFRESH_SECRET'),
          expiresIn: this.configService.get('JWT_REFRESH_EXPIRES_IN') * 1000,
        },
      ),
    ]);

    return {
      accessToken: {
        token: accessToken,
        expiresIn: new Date(
          Date.now() + this.configService.get('JWT_ACCESS_EXPIRES_IN') * 1000,
        ),
      },
      refreshToken: {
        token: refreshToken,
        expiresIn: new Date(
          Date.now() + this.configService.get('JWT_REFRESH_EXPIRES_IN') * 1000,
        ),
      },
    };
  }
}
