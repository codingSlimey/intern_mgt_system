import { createApplicationDto } from './dto/application.dto';
import { ApplicationRepository } from './application.repository';
import { File } from '../../common/interfaces/file.interface';
import { S3ManagerService } from '../s3-manager/s3-manager.service';
export declare class ApplicationService {
    private readonly applicationRepository;
    private readonly s3ManagerService;
    BUCKET_NAME: string;
    constructor(applicationRepository: ApplicationRepository, s3ManagerService: S3ManagerService);
    findApplicationsByStudentId(studentId: any): Promise<void>;
    findApplicationsByCoordinatorId(coordinatorId: any): Promise<void>;
    findApplicationById(applicationId: number): Promise<{
        resume: {
            id: number;
            name: string;
            isVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
            size: number;
        };
        insurance: {
            id: number;
            name: string;
            userId: number;
            applicationId: number;
            createdAt: Date;
            updatedAt: Date;
            isVerified: boolean;
            size: number;
        };
    } & {
        id: number;
        studentId: number;
        resumeId: number;
        name: string;
        days: number;
        email: string;
        cyprus: boolean;
        isApproved: boolean;
    }>;
    createApplication(email: string, createDto: createApplicationDto, file: File): Promise<{
        id: number;
        studentId: number;
        resumeId: number;
        name: string;
        days: number;
        email: string;
        cyprus: boolean;
        isApproved: boolean;
    }>;
    declineApplication(applicationId: number): Promise<{
        id: number;
        studentId: number;
        resumeId: number;
        name: string;
        days: number;
        email: string;
        cyprus: boolean;
        isApproved: boolean;
    }>;
    approveApplication(applicationId: number): Promise<{
        id: number;
        studentId: number;
        resumeId: number;
        name: string;
        days: number;
        email: string;
        cyprus: boolean;
        isApproved: boolean;
    }>;
    deleteApplication(applicationId: number): Promise<{
        id: number;
        studentId: number;
        resumeId: number;
        name: string;
        days: number;
        email: string;
        cyprus: boolean;
        isApproved: boolean;
    }>;
}
