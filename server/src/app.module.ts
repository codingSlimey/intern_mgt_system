import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { StudentModule } from './modules/student/student.module';
import { CoordinatorModule } from './modules/coordinator/coordinator.module';
import { SuperviserModule } from './modules/superviser/superviser.module';
import { ApplicationModule } from './modules/application/application.module';
import { CompanyModule } from './modules/company/company.module';

@Module({
  imports: [PrismaModule, StudentModule, CoordinatorModule, SuperviserModule, ApplicationModule, CompanyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
