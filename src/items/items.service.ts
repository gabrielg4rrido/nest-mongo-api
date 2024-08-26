import { Injectable } from '@nestjs/common';
import { Item } from './interface/item.interface';
import { CreateItemDto } from './dto/create-item-dto';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    { id: '1', name: 'Apple', quantity: 10 },
    { id: '2', name: 'Banana', quantity: 5 },
    { id: '3', name: 'Orange', quantity: 8 },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }

  create(item: CreateItemDto): Item {
    const newItem = {
      id: String(Date.now()),
      name: item.name,
      description: item.description,
      quantity: item.quantity,
    };
    this.items.push(newItem);
    return newItem;
  }
}
