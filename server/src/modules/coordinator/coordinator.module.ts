import { Module } from '@nestjs/common';
import { CoordinatorService } from './coordinator.service';
import { CoordinatorController } from './coordinator.controller';
import { CoordinatorRepository } from './coordinator.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [CoordinatorService, CoordinatorRepository, PrismaService],
  controllers: [CoordinatorController]
})
export class CoordinatorModule {}
