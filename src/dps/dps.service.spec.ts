import { Test, TestingModule } from '@nestjs/testing';
import { DpsService } from './dps.service';

describe('DpsService', () => {
  let service: DpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DpsService],
    }).compile();

    service = module.get<DpsService>(DpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
