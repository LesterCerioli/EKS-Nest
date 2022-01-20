import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CoresService } from './cores.service';
import { CreateCoreDto } from './dto/create-core.dto';
import { UpdateCoreDto } from './dto/update-core.dto';

@Controller()
export class CoresController {
  constructor(private readonly coresService: CoresService) {}

  @MessagePattern('createCore')
  create(@Payload() createCoreDto: CreateCoreDto) {
    return this.coresService.create(createCoreDto);
  }

  @MessagePattern('findAllCores')
  findAll() {
    return this.coresService.findAll();
  }

  @MessagePattern('findOneCore')
  findOne(@Payload() id: number) {
    return this.coresService.findOne(id);
  }

  @MessagePattern('updateCore')
  update(@Payload() updateCoreDto: UpdateCoreDto) {
    return this.coresService.update(updateCoreDto.id, updateCoreDto);
  }

  @MessagePattern('removeCore')
  remove(@Payload() id: number) {
    return this.coresService.remove(id);
  }
}
