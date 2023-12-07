import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from './schemas/items.schema';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  async getAllItems(): Promise<Items[]> {
    return this.itemsService.findAll();
  }

  @Post()
  async addItem(@Body() items): Promise<Items> {
    console.log(items);
    return this.itemsService.create(items);
  }
}
