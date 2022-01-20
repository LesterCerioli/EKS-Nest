import { Test, TestingModule } from '@nestjs/testing';
import { PaymentSchedulesController } from './payment-schedules.controller';
import { PaymentSchedulesService } from './payment-schedules.service';

describe('PaymentSchedulesController', () => {
  let controller: PaymentSchedulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentSchedulesController],
      providers: [PaymentSchedulesService],
    }).compile();

    controller = module.get<PaymentSchedulesController>(PaymentSchedulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
