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
exports.ApplicationService = void 0;
const common_1 = require("@nestjs/common");
const application_repository_1 = require("./application.repository");
const s3_manager_service_1 = require("../s3-manager/s3-manager.service");
let ApplicationService = class ApplicationService {
    constructor(applicationRepository, s3ManagerService) {
        this.applicationRepository = applicationRepository;
        this.s3ManagerService = s3ManagerService;
        this.BUCKET_NAME = 'emu-internship-management-system';
    }
    async findApplicationsByStudentId(studentId) {
        this.applicationRepository.findApplicationsByStudentId(studentId);
    }
    async findApplicationsByCoordinatorId(coordinatorId) {
        this.applicationRepository.findApplicationsByCoordinatorId(coordinatorId);
    }
    async findApplicationById(applicationId) {
        return await this.applicationRepository.findApplicationById(applicationId);
    }
    async createApplication(email, createDto, file) {
        const uploadResult = await this.s3ManagerService.uploadFile(this.BUCKET_NAME, file);
        return await this.applicationRepository.createApplication(email, createDto, uploadResult.key);
    }
    async declineApplication(applicationId) {
        return await this.applicationRepository.declineApplication(applicationId);
    }
    async approveApplication(applicationId) {
        return await this.applicationRepository.approveApplication(applicationId);
    }
    async deleteApplication(applicationId) {
        const application = await this.findApplicationById(applicationId);
        await this.s3ManagerService.deleteFile(this.BUCKET_NAME, application.insurance.name);
        await this.s3ManagerService.deleteFile(this.BUCKET_NAME, application.resume.name);
        return await this.applicationRepository.deleteApplication(applicationId);
    }
};
exports.ApplicationService = ApplicationService;
exports.ApplicationService = ApplicationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [application_repository_1.ApplicationRepository, s3_manager_service_1.S3ManagerService])
], ApplicationService);
//# sourceMappingURL=application.service.js.map