import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}

  async create(user) {
    return await this.studentRepository.upsert(user);
  }

  async findAll() {
    return await this.studentRepository.findAll();
  }

  async findOne(id: number) {
    return await this.studentRepository.findUnique(id);
  }
  async findByEmail(email: string) {
    return true;
  }
}
