import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { StudentModule } from './modules/student/student.module';
import { CoordinatorModule } from './modules/coordinator/coordinator.module';
import { SuperviserModule } from './modules/superviser/superviser.module';
import { ApplicationModule } from './modules/application/application.module';
import { CompanyModule } from './modules/company/company.module';
import { AuthModule } from './modules/auth/auth.module';
import { S3ManagerModule } from './modules/s3-manager/s3-manager.module';

@Module({
  imports: [AuthModule, PrismaModule, StudentModule, CoordinatorModule, SuperviserModule, ApplicationModule, CompanyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
