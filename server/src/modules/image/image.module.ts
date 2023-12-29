import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { ImageRepository } from './image.repository';
import { S3ManagerModule } from '../s3-manager/s3-manager.module';
import { StudentModule } from '../student/student.module';
import { SuperviserModule } from '../superviser/superviser.module';
import { CoordinatorModule } from '../coordinator/coordinator.module';
import { ApplicationModule } from '../application/application.module';

@Module({
  imports: [StudentModule, SuperviserModule, CoordinatorModule, ApplicationModule, S3ManagerModule],
  providers: [ImageService, ImageRepository],
  controllers: [ImageController]
})
export class ImageModule {}

