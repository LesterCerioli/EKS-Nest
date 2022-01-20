import { Test, TestingModule } from '@nestjs/testing';
import { DpsController } from './dps.controller';
import { DpsService } from './dps.service';

describe('DpsController', () => {
  let controller: DpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DpsController],
      providers: [DpsService],
    }).compile();

    controller = module.get<DpsController>(DpsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
