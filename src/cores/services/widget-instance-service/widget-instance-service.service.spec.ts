import { Test, TestingModule } from '@nestjs/testing';
import { WidgetInstanceServiceService } from './widget-instance-service.service';

describe('WidgetInstanceServiceService', () => {
  let service: WidgetInstanceServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WidgetInstanceServiceService],
    }).compile();

    service = module.get<WidgetInstanceServiceService>(WidgetInstanceServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
