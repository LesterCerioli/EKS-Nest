import { Test, TestingModule } from '@nestjs/testing';
import { PaymentSchedulesService } from './payment-schedules.service';

describe('PaymentSchedulesService', () => {
  let service: PaymentSchedulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentSchedulesService],
    }).compile();

    service = module.get<PaymentSchedulesService>(PaymentSchedulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
