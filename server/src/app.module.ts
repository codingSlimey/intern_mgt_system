import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CoordinatorModule } from './coordinator/coordinator.module';
import { SuperviserModule } from './superviser/superviser.module';

@Module({
  imports: [PrismaModule, UserModule, CoordinatorModule, SuperviserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
