import { PrismaService } from '../prisma/prisma.service';
import { UploadResumeDto } from './dto/upload-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { Resume as FileModel } from '@prisma/client';
export declare class ResumeRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    saveFile(applicationId: number, fileName: string, type: string, size: number, uploadFileDto: UploadResumeDto): Promise<FileModel>;
    findById(id: number): Promise<FileModel>;
    findByUrl(name: string): Promise<{
        id: number;
        name: string;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
        size: number;
    }>;
    update(id: number, updateFileDto: UpdateResumeDto): Promise<FileModel | undefined>;
    findUnverifieds(): Promise<FileModel[]>;
    accept(id: number): Promise<FileModel>;
    delete(id: number): Promise<FileModel>;
}
