import { Test, TestingModule } from '@nestjs/testing';
import { EntityServiceService } from './entity-service.service';

describe('EntityServiceService', () => {
  let service: EntityServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntityServiceService],
    }).compile();

    service = module.get<EntityServiceService>(EntityServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
