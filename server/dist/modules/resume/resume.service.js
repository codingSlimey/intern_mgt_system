"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeService = void 0;
const common_1 = require("@nestjs/common");
const resume_repository_1 = require("./resume.repository");
const s3_manager_service_1 = require("../s3-manager/s3-manager.service");
const mime = require("mime-types");
const application_service_1 = require("../application/application.service");
let ResumeService = class ResumeService {
    constructor(fileRepository, applicationService, s3) {
        this.fileRepository = fileRepository;
        this.applicationService = applicationService;
        this.s3 = s3;
    }
    async saveFile(applicationId, file, uploadFileDto) {
        const subject = await this.applicationService.findApplicationById(applicationId);
        if (!subject) {
            throw new common_1.BadRequestException('application id not valid!');
        }
        if (!this.isValidType(file.mimetype))
            throw new common_1.HttpException("file type is not valid", common_1.HttpStatus.FORBIDDEN);
        const size = Math.round(file.size / 1000);
        const fileType = `${mime.extension(file.mimetype)}`;
        const saveToStorage = await this.s3.uploadFile('resumes', file);
        await this.fileRepository.saveFile(subject.id, saveToStorage.key, fileType, size, uploadFileDto);
        return { success: true };
    }
    async deleteFile(id) {
        const file = await this.fileRepository.findById(id);
        if (!file)
            throw new common_1.BadRequestException("file not found");
        await this.s3.deleteFile('resumes', file.name);
        await this.fileRepository.delete(id);
        return { sucess: true };
    }
    async update(id, updateFileDto) {
        const file = await this.fileRepository.findById(id);
        if (!file) {
            throw new common_1.BadRequestException("file not found");
        }
        await this.fileRepository.update(id, updateFileDto);
        return { success: true };
    }
    async findUnverifieds() {
        const files = await this.fileRepository.findUnverifieds();
        return files;
    }
    async accept(id) {
        const file = await this.fileRepository.findById(id);
        if (!file)
            throw new common_1.HttpException("file not found", common_1.HttpStatus.NOT_FOUND);
        return await this.fileRepository.accept(id);
    }
    isValidType(mimeType) {
        const allowedFileExtensions = [
            'pdf',
        ];
        const fileExt = `${mime.extension(mimeType)}`;
        if (allowedFileExtensions.includes(fileExt)) {
            return true;
        }
        return false;
    }
    async findByIdOrThrowExpection(fileId) {
        const file = await this.fileRepository.findById(fileId);
        if (!file || !file.isVerified) {
            throw new common_1.BadRequestException("file not found");
        }
        return file;
    }
};
exports.ResumeService = ResumeService;
exports.ResumeService = ResumeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [resume_repository_1.ResumeRepository,
        application_service_1.ApplicationService,
        s3_manager_service_1.S3ManagerService])
], ResumeService);
//# sourceMappingURL=resume.service.js.map