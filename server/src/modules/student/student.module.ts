import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { StudentRepository } from './student.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService, StudentRepository, PrismaService]
})
export class StudentModule {}
