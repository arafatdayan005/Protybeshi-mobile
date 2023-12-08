/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Users } from './schemas/users.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name)
    private usersModel: mongoose.Model<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    const users = await this.usersModel.find();
    return users;
  }

  async create(userData: Users): Promise<Users> {
    const res = await this.usersModel.create(userData);
    console.log(res);
    return res;
  }
}
