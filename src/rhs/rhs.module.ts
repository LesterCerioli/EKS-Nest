import { Module } from '@nestjs/common';
import { RhsService } from './rhs.service';
import { RhsController } from './rhs.controller';

@Module({
  controllers: [RhsController],
  providers: [RhsService]
})
export class RhsModule {}
