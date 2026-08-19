import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Role } from 'generated/prisma/enums';
export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEnum(Role)
  role!: Role;

  @IsString()
  @IsOptional()
  phoneNo?: string;
}
