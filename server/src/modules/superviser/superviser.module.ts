import { Module } from '@nestjs/common';
import { SuperviserService } from './superviser.service';
import { SuperviserController } from './superviser.controller';
import { SuperviserRepository } from './superviser.repository';

@Module({
  providers: [SuperviserService, SuperviserRepository],
  controllers: [SuperviserController]
})
export class SuperviserModule {}
