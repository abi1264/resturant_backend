import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Role } from 'generated/prisma/client';
export class UpdateAdminDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEnum(Role)
  role!: Role;

  @IsOptional()
  @IsString()
  phoneNo?: string;
}
