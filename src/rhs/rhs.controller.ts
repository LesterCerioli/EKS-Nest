import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RhsService } from './rhs.service';
import { CreateRhDto } from './dto/create-rh.dto';
import { UpdateRhDto } from './dto/update-rh.dto';

@Controller()
export class RhsController {
  constructor(private readonly rhsService: RhsService) {}

  @MessagePattern('createRh')
  create(@Payload() createRhDto: CreateRhDto) {
    return this.rhsService.create(createRhDto);
  }

  @MessagePattern('findAllRhs')
  findAll() {
    return this.rhsService.findAll();
  }

  @MessagePattern('findOneRh')
  findOne(@Payload() id: number) {
    return this.rhsService.findOne(id);
  }

  @MessagePattern('updateRh')
  update(@Payload() updateRhDto: UpdateRhDto) {
    return this.rhsService.update(updateRhDto.id, updateRhDto);
  }

  @MessagePattern('removeRh')
  remove(@Payload() id: number) {
    return this.rhsService.remove(id);
  }
}
