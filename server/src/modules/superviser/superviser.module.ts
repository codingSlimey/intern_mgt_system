import { Module } from '@nestjs/common';
import { SuperviserService } from './superviser.service';
import { SuperviserController } from './superviser.controller';
import { SuperviserRepository } from './superviser.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [SuperviserService, SuperviserRepository, PrismaService],
  controllers: [SuperviserController]
})
export class SuperviserModule {}
