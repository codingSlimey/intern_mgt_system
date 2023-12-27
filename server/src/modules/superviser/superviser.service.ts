import { Injectable } from '@nestjs/common';
import { SuperviserRepository } from './superviser.repository';
import { AssessmentCriteriaDto } from './dto/assessment.dto';

@Injectable()
export class SuperviserService {
    constructor(private readonly superviserRepository: SuperviserRepository) {}

    async create(user) {
      return await this.superviserRepository.upsert(user);
    }
  
    async findAll() {
      return await this.superviserRepository.findAll();
    }
  
    async findOne(id: number) {
      return await this.superviserRepository.findUnique(id);
    }
    async findByEmail(email: string) {
      return await this.superviserRepository.findByEmail(email);
    }

    async AssessStudent(assessmentCriteriaDto: AssessmentCriteriaDto) {
      return await this.superviserRepository.AssessStudent(assessmentCriteriaDto);
    }
}
