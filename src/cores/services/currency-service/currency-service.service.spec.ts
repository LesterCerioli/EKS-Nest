import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyServiceService } from './currency-service.service';

describe('CurrencyServiceService', () => {
  let service: CurrencyServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyServiceService],
    }).compile();

    service = module.get<CurrencyServiceService>(CurrencyServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
