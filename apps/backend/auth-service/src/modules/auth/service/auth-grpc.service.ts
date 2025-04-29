import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  LoginRequest,
  LoginResponse,
  RegisterUserRequest,
  RegisterUserResponse,
  User,
} from '../../../proto/generated/auth';
import { GrpcMethod } from '@nestjs/microservices';

@Injectable()
export class AuthGrpcService {
  constructor(private authService: AuthService) {}

  @GrpcMethod('AuthService', 'RegisterUser')
  async registerUser(data: RegisterUserRequest): Promise<RegisterUserResponse> {
    const user = await this.authService.registerUser(data);

    const userMessage = {
      id: user.id.toString(),
      email: user.email,
      username: user.username,
      fullName: user.fullName,
      role: user.role,
      accountType: user.accountType,
      phone: user.phone,
      city: user.city,
      password: user.password,
    };

    return { user: userMessage };
  }

  @GrpcMethod('AuthService', 'Login')
  async loginUser(data: LoginRequest): Promise<LoginResponse> {
    const tokens = await this.authService.loginUser(data);

    return {
      accessToken: tokens.accessToken.token,
      refreshToken: tokens.refreshToken.token,
    };
  }

}
