import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WhishesService } from './whishes.service';
import { CreateWhishDto } from './dto/create-whish.dto';
import { UpdateWhishDto } from './dto/update-whish.dto';

@Controller('whishes')
export class WhishesController {
  constructor(private readonly whishesService: WhishesService) {}

  @Post()
  create(@Body() createWhishDto: CreateWhishDto) {
    return this.whishesService.create(createWhishDto);
  }

  @Get()
  findAll() {
    return this.whishesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.whishesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWhishDto: UpdateWhishDto) {
    return this.whishesService.update(+id, updateWhishDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.whishesService.remove(+id);
  }
}
