import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Role } from 'generated/prisma/client';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password!: string;

  @IsEnum(Role)
  role!: Role;

  @IsOptional()
  @IsString()
  phoneNo?: string;
}
