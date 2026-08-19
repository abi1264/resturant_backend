import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
