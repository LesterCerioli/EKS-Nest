import { Test, TestingModule } from '@nestjs/testing';
import { SmsSenderServiceService } from './sms-sender-service.service';

describe('SmsSenderServiceService', () => {
  let service: SmsSenderServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmsSenderServiceService],
    }).compile();

    service = module.get<SmsSenderServiceService>(SmsSenderServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
