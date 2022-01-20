import { Module } from '@nestjs/common';
import { DpsService } from './dps.service';
import { DpsController } from './dps.controller';

@Module({
  controllers: [DpsController],
  providers: [DpsService]
})
export class DpsModule {}
