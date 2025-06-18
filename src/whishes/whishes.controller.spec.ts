import { Test, TestingModule } from '@nestjs/testing';
import { WhishesController } from './whishes.controller';
import { WhishesService } from './whishes.service';

describe('WhishesController', () => {
  let controller: WhishesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhishesController],
      providers: [WhishesService],
    }).compile();

    controller = module.get<WhishesController>(WhishesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
