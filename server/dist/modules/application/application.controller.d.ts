/// <reference types="multer" />
import { ApplicationService } from './application.service';
import { createApplicationDto } from './dto/application.dto';
export declare class ApplicationController {
    private readonly applicationService;
    constructor(applicationService: ApplicationService);
    findApplicationsByCoordinatorId(user: any): Promise<void>;
    findApplicationsByStudentId(user: any): Promise<void>;
    createApplication(user: any, createDto: createApplicationDto, file: Express.Multer.File): Promise<{
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
