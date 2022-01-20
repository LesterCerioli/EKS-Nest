import { Injectable } from '@nestjs/common';
import { CreateDpDto } from './dto/create-dp.dto';
import { UpdateDpDto } from './dto/update-dp.dto';

@Injectable()
export class DpsService {
  create(createDpDto: CreateDpDto) {
    return 'This action adds a new dp';
  }

  findAll() {
    return `This action returns all dps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dp`;
  }

  update(id: number, updateDpDto: UpdateDpDto) {
    return `This action updates a #${id} dp`;
  }

  remove(id: number) {
    return `This action removes a #${id} dp`;
  }
}
