import { Module } from '@nestjs/common';
import { PaymentSchedulesService } from './payment-schedules.service';
import { PaymentSchedulesController } from './payment-schedules.controller';

@Module({
  controllers: [PaymentSchedulesController],
  providers: [PaymentSchedulesService]
})
export class PaymentSchedulesModule {}
