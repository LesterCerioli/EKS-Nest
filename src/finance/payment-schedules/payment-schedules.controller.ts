import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentSchedulesService } from './payment-schedules.service';
import { CreatePaymentScheduleDto } from './dto/create-payment-schedule.dto';
import { UpdatePaymentScheduleDto } from './dto/update-payment-schedule.dto';

@Controller()
export class PaymentSchedulesController {
  constructor(private readonly paymentSchedulesService: PaymentSchedulesService) {}

  @MessagePattern('createPaymentSchedule')
  create(@Payload() createPaymentScheduleDto: CreatePaymentScheduleDto) {
    return this.paymentSchedulesService.create(createPaymentScheduleDto);
  }

  @MessagePattern('findAllPaymentSchedules')
  findAll() {
    return this.paymentSchedulesService.findAll();
  }

  @MessagePattern('findOnePaymentSchedule')
  findOne(@Payload() id: number) {
    return this.paymentSchedulesService.findOne(id);
  }

  @MessagePattern('updatePaymentSchedule')
  update(@Payload() updatePaymentScheduleDto: UpdatePaymentScheduleDto) {
    return this.paymentSchedulesService.update(updatePaymentScheduleDto.id, updatePaymentScheduleDto);
  }

  @MessagePattern('removePaymentSchedule')
  remove(@Payload() id: number) {
    return this.paymentSchedulesService.remove(id);
  }
}
