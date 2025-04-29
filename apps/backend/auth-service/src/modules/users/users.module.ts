import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../../common/entities/user.entity";
import {CompanyEntity} from "../../common/entities/company.entity";
import {UserService} from "./service/user.service";
import {UserRepository} from "./repository/user.repository";
import {CompanyRepository} from "./repository/company.repository";
import {CompanyService} from "./service/company.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, CompanyEntity])],
    providers: [UserService, UserRepository, CompanyRepository, CompanyService],
    controllers: [],
    exports: [UserService, UserRepository, CompanyRepository, CompanyService],
})
export class UsersModule {}
