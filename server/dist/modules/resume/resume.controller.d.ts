import { UploadResumeDto } from './dto/upload-resume.dto';
import { ResumeService } from './resume.service';
import { Resume as FileModel } from '@prisma/client';
import { File } from 'src/common/interfaces/file.interface';
import { UpdateResumeDto } from './dto/update-resume.dto';
export declare class ResumeController {
    private readonly resumeService;
    constructor(resumeService: ResumeService);
    uploadFile(file: File, body: UploadResumeDto, subId: number): Promise<{
        success: boolean;
    }>;
    deleteFile(id: number): Promise<{
        sucess: boolean;
    }>;
    findUnverifieds(): Promise<FileModel[]>;
    findById(fileId: number): Promise<FileModel | undefined>;
    accept(fileId: number): Promise<{
        id: number;
        name: string;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
        size: number;
    }>;
    update(id: number, updateFileDto: UpdateResumeDto): Promise<any>;
}
