import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/updateUserDto';
import { CreateUserDto } from './dto/createUserDto';
import { UserRepository } from './user.repository';
import { UserCreateInput, UserUpdateInput } from 'generated/prisma/models';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly repoService: UserRepository) {}

  getAllUsers() {
    return this.repoService.getAllUsers();
  }

  getUserById(id: number) {
    return this.repoService.getUserById(id);
  }

  async createUser(body: CreateUserDto) {
    const passwordHash = await bcrypt.hash(body.password, 10);
    const data: UserCreateInput = {
      name: body.name,
      email: body.email,
      passwordHash,
    };

    return this.repoService.createUser(data);
  }

  updateUser(id: number, body: UpdateUserDto) {
    const data: UserUpdateInput = {
      name: body.name,
      role: body.role,
    };
    return this.repoService.updateUser(id, data);
  }

  deleteUser(id: number) {
    return this.repoService.deleteUser(id);
  }
}
