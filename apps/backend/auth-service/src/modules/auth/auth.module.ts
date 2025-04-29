import { Module } from '@nestjs/common';
import {JwtModule} from "@nestjs/jwt";
import {UsersModule} from "../users/users.module";
import {UserService} from "../users/service/user.service";
import {AuthService} from "./service/auth.service";
import {AuthGrpcService} from "./service/auth-grpc.service";
import {CompanyService} from "../users/service/company.service";

@Module({
    imports: [JwtModule, UsersModule],
    providers: [UserService, AuthService, AuthGrpcService, CompanyService],
    controllers: [],
    exports: [],
})
export class AuthModule {}
