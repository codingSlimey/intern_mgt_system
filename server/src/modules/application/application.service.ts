import { Injectable, Req, Res } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { createApplicationDto } from './dto/application.dto';
import { ApplicationRepository } from './application.repository';
import { File } from '../../common/interfaces/file.interface'; 
import { S3ManagerService } from '../s3-manager/s3-manager.service';

@Injectable()
export class ApplicationService {
    BUCKET_NAME = 'emu-internship-management-system';
    constructor(private readonly applicationRepository: ApplicationRepository, private readonly s3ManagerService: S3ManagerService) {}
    
    async findApplicationsByStudentId(studentId) {
        this.applicationRepository.findApplicationsByStudentId(studentId);
    }

    async findApplicationsByCoordinatorId(coordinatorId) {
        this.applicationRepository.findApplicationsByCoordinatorId(coordinatorId);
    }

    async findApplicationById(applicationId: number) {
        return await this.applicationRepository.findApplicationById(applicationId);
    }

    async createApplication(email: string,createDto: createApplicationDto, file: File) {
        const uploadResult = await this.s3ManagerService.uploadFile(this.BUCKET_NAME, file);
        return await this.applicationRepository.createApplication(email, createDto, uploadResult.key);
    }

    async declineApplication(applicationId: number) {
        return await this.applicationRepository.declineApplication(applicationId);
    }

    async approveApplication(applicationId: number) {
        return await this.applicationRepository.approveApplication(applicationId);
    }

    async deleteApplication(applicationId: number) {
        const application = await this.findApplicationById(applicationId);
        await this.s3ManagerService.deleteFile(this.BUCKET_NAME, application.insurance.name);
        await this.s3ManagerService.deleteFile(this.BUCKET_NAME, application.resume.name);
        return await this.applicationRepository.deleteApplication(applicationId);
    }

}
