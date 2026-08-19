import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.getAllUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.getUserById(Number(id));
  }

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return await this.userService.createUser(body);
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return await this.userService.updateUser(Number(id), body);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.deleteUser(Number(id));
  }
}
