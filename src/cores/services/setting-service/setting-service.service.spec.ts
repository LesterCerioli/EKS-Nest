import { Test, TestingModule } from '@nestjs/testing';
import { SettingServiceService } from './setting-service.service';

describe('SettingServiceService', () => {
  let service: SettingServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SettingServiceService],
    }).compile();

    service = module.get<SettingServiceService>(SettingServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
