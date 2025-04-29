import {IsEmail, IsNotEmpty, IsOptional, IsString} from "class-validator";


export class RegisterUserDTO {

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    fullName: string;

    @IsOptional()
    @IsString()
    city: string

    @IsNotEmpty()
    @IsString()
    phone: string

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    confirmPassword: string;



}