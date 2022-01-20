import { Injectable } from '@nestjs/common';
import { CreatePaymentScheduleDto } from './dto/create-payment-schedule.dto';
import { UpdatePaymentScheduleDto } from './dto/update-payment-schedule.dto';

@Injectable()
export class PaymentSchedulesService {
  create(createPaymentScheduleDto: CreatePaymentScheduleDto) {
    return 'This action adds a new paymentSchedule';
  }

  findAll() {
    return `This action returns all paymentSchedules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentSchedule`;
  }

  update(id: number, updatePaymentScheduleDto: UpdatePaymentScheduleDto) {
    return `This action updates a #${id} paymentSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentSchedule`;
  }
}
