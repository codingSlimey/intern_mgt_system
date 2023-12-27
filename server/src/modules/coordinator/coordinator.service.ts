import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CoordinatorRepository } from './coordinator.repository';
import { AssessmentCriteriaDto } from './dto/assessment.dto';

@Injectable()
export class CoordinatorService {
  constructor(private readonly coordinatorRepository: CoordinatorRepository) {}

  async create(user) {
    return await this.coordinatorRepository.upsert(user);
  }

  async findAll() {
    return await this.coordinatorRepository.findAll();
  }

  async findOne(id: number) {
    return await this.coordinatorRepository.findUnique(id);
  }
  async getAllDepartments(){
    return await this.coordinatorRepository.getAllDepartments();
  }
  async findByEmail(email: string) {
    return await this.coordinatorRepository.findByEmail(email);
  }
  async AssessStudent(assessmentCriteriaDto: AssessmentCriteriaDto) {
    return await this.coordinatorRepository.AssessStudent(assessmentCriteriaDto);
  }
}
