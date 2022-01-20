import { Test, TestingModule } from '@nestjs/testing';
import { RhsController } from './rhs.controller';
import { RhsService } from './rhs.service';

describe('RhsController', () => {
  let controller: RhsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RhsController],
      providers: [RhsService],
    }).compile();

    controller = module.get<RhsController>(RhsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
