import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DpsService } from './dps.service';
import { CreateDpDto } from './dto/create-dp.dto';
import { UpdateDpDto } from './dto/update-dp.dto';

@Controller()
export class DpsController {
  constructor(private readonly dpsService: DpsService) {}

  @MessagePattern('createDp')
  create(@Payload() createDpDto: CreateDpDto) {
    return this.dpsService.create(createDpDto);
  }

  @MessagePattern('findAllDps')
  findAll() {
    return this.dpsService.findAll();
  }

  @MessagePattern('findOneDp')
  findOne(@Payload() id: number) {
    return this.dpsService.findOne(id);
  }

  @MessagePattern('updateDp')
  update(@Payload() updateDpDto: UpdateDpDto) {
    return this.dpsService.update(updateDpDto.id, updateDpDto);
  }

  @MessagePattern('removeDp')
  remove(@Payload() id: number) {
    return this.dpsService.remove(id);
  }
}
