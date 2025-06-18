import { Test, TestingModule } from '@nestjs/testing';
import { WhishesService } from './whishes.service';

describe('WhishesService', () => {
  let service: WhishesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhishesService],
    }).compile();

    service = module.get<WhishesService>(WhishesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
