import { Injectable } from '@nestjs/common';
import { CreateWhishDto } from './dto/create-whish.dto';
import { UpdateWhishDto } from './dto/update-whish.dto';

@Injectable()
export class WhishesService {
  create(createWhishDto: CreateWhishDto) {
    return 'This action adds a new whish';
  }

  findAll() {
    return `This action returns all whishes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} whish`;
  }

  update(id: number, updateWhishDto: UpdateWhishDto) {
    return `This action updates a #${id} whish`;
  }

  remove(id: number) {
    return `This action removes a #${id} whish`;
  }
}
