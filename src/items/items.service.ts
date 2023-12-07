import { Injectable } from '@nestjs/common';
import { Items } from './schemas/items.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Items.name)
    private itemsModel: mongoose.Model<Items>,
  ) {}

  async findAll(): Promise<Items[]> {
    const items = await this.itemsModel.find();
    return items;
  }

  async create(itemData: Items): Promise<Items> {
    const res = await this.itemsModel.create(itemData);
    console.log(res);
    return res;
  }
}
