/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Items {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  safetyMoney: number;

  @Prop()
  img: string;

  @Prop()
  contact: number;
}

export const ItemsSchema = SchemaFactory.createForClass(Items)