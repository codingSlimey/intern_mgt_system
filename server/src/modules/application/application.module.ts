import { Module } from '@nestjs/common';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import { ApplicationRepository } from './application.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ApplicationController],
  providers: [ApplicationService, ApplicationRepository, PrismaService]
})
export class ApplicationModule {}
