import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { StudentModule } from './modules/student/student.module';
import { CoordinatorModule } from './modules/coordinator/coordinator.module';
import { SuperviserModule } from './modules/superviser/superviser.module';

@Module({
  imports: [PrismaModule, StudentModule, CoordinatorModule, SuperviserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
