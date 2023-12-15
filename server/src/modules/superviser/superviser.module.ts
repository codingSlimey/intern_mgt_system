import { Module } from '@nestjs/common';
import { SuperviserService } from './superviser.service';
import { SuperviserController } from './superviser.controller';

@Module({
  providers: [SuperviserService],
  controllers: [SuperviserController]
})
export class SuperviserModule {}
