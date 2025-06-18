import { Module } from '@nestjs/common';
import { WhishesService } from './whishes.service';
import { WhishesController } from './whishes.controller';

@Module({
  controllers: [WhishesController],
  providers: [WhishesService],
})
export class WhishesModule {}
