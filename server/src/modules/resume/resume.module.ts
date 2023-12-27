import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';
import { ResumeRepository } from './resume.repository';
import { ApplicationModule } from '../application/application.module';
import { S3ManagerModule } from '../s3-manager/s3-manager.module';
import { ApplicationService } from '../application/application.service';
import { PrismaService } from '../prisma/prisma.service';
import { ApplicationRepository } from '../application/application.repository';

@Module({
  imports: [ S3ManagerModule, ApplicationModule],
  controllers: [ResumeController],
  providers: [ResumeService, ResumeRepository, ApplicationService, PrismaService, ApplicationRepository]
})
export class ResumeModule {}
