import { UploadResumeDto } from './dto/upload-resume.dto';
import { ResumeRepository } from './resume.repository';
import { File } from '../../common/interfaces/file.interface';
import { S3ManagerService } from '../s3-manager/s3-manager.service';
import { Resume as FileModel } from '@prisma/client';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { ApplicationService } from '../application/application.service';
export declare class ResumeService {
    private readonly fileRepository;
    private readonly applicationService;
    private readonly s3;
    constructor(fileRepository: ResumeRepository, applicationService: ApplicationService, s3: S3ManagerService);
    saveFile(applicationId: number, file: File, uploadFileDto: UploadResumeDto): Promise<{
        success: boolean;
    }>;
    deleteFile(id: number): Promise<{
        sucess: boolean;
    }>;
    update(id: number, updateFileDto: UpdateResumeDto): Promise<any>;
    findUnverifieds(): Promise<FileModel[]>;
    accept(id: number): Promise<FileModel>;
    isValidType(mimeType: string): boolean;
    findByIdOrThrowExpection(fileId: number): Promise<FileModel | undefined>;
}
