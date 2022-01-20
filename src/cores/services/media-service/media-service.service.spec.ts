import { Test, TestingModule } from '@nestjs/testing';
import { MediaServiceService } from './media-service.service';

describe('MediaServiceService', () => {
  let service: MediaServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaServiceService],
    }).compile();

    service = module.get<MediaServiceService>(MediaServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
