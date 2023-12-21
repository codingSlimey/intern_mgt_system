import { Module } from '@nestjs/common';
import { CoordinatorService } from './coordinator.service';
import { CoordinatorController } from './coordinator.controller';
import { CoordinatorRepository } from './coordinator.repository';

@Module({
  providers: [CoordinatorService, CoordinatorRepository],
  controllers: [CoordinatorController]
})
export class CoordinatorModule {}
