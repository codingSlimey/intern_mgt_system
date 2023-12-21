import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CoordinatorRepository } from './coordinator.repository';

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
  async findByEmail(email: string) {
    return true;
  }
}
