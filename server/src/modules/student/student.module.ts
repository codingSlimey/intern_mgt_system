import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { StudentRepository } from './student.repository';

@Module({
  controllers: [StudentController, StudentRepository],
  providers: [StudentService]
})
export class StudentModule {}
