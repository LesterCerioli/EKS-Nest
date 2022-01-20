import { PartialType } from '@nestjs/mapped-types';
import { CreateDpDto } from './create-dp.dto';

export class UpdateDpDto extends PartialType(CreateDpDto) {
  id: number;
}
