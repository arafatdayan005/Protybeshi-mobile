/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './schemas/users.schema';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Post()
  async addItem(@Body() users): Promise<Users> {
    console.log(users);
    return this.usersService.create(users);
  }
}
