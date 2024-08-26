import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Get item ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description} Qtd: ${createItemDto.quantity}`;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateItemDto: CreateItemDto,
  ): string {
    return `Update item ${id} Name: ${updateItemDto.name} Desc: ${updateItemDto.description} Qtd: ${updateItemDto.quantity}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `Delete item ${id}`;
  }
}
