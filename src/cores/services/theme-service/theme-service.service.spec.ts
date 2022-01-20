import { Test, TestingModule } from '@nestjs/testing';
import { ThemeServiceService } from './theme-service.service';

describe('ThemeServiceService', () => {
  let service: ThemeServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThemeServiceService],
    }).compile();

    service = module.get<ThemeServiceService>(ThemeServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
