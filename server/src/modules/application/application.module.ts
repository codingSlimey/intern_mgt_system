import { Module } from '@nestjs/common';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import { ApplicationRepository } from './application.repository';
import { PrismaService } from '../prisma/prisma.service';
import { S3ManagerService } from '../s3-manager/s3-manager.service';

@Module({
  controllers: [ApplicationController],
  providers: [ApplicationService, ApplicationRepository, PrismaService, S3ManagerService]
})
export class ApplicationModule {}
