import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { UserRoleType } from '../../../common/constants/user-role-type';

export class RegisterCompanyDto {
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
  city: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsEnum(UserRoleType)
  role: UserRoleType;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  confirmPassword: string;

  @IsNotEmpty()
  @IsNumber()
  bin: number;

  @IsNotEmpty()
  @IsNumber()
  kbe: number;

  @IsNotEmpty()
  @IsString()
  registeredAddress: string;

  @IsNotEmpty()
  @IsString()
  emailAddress: string;

  @IsNotEmpty()
  @IsNumber()
  postcode: number;

  @IsNotEmpty()
  @IsNumber()
  iik: number;

  @IsNotEmpty()
  @IsNumber()
  bik: number;
}
