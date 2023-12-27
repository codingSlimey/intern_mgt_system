import { PrismaService } from '../prisma/prisma.service';
import { createApplicationDto } from './dto/application.dto';
import { File } from '../../common/interfaces/file.interface';
export declare class ApplicationRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findApplicationsByStudentId(studentId: number): Promise<({
        student: {
            id: number;
            userId: number;
            departmentId: number;
            email: string;
            studentNumber: number;
            cassessmentId: number;
            sassessmentId: number;
        };
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
    })[]>;
    findApplicationsByCoordinatorId(coordinatorId: number): Promise<({
        student: {
            id: number;
            userId: number;
            departmentId: number;
            email: string;
            studentNumber: number;
            cassessmentId: number;
            sassessmentId: number;
        };
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
    })[]>;
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
    createApplication(email: string, createDto: createApplicationDto, resumeName: string, insuranceKey?: string, insuranceFileData?: File): Promise<{
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
