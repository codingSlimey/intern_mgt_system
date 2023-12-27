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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const upload_resume_dto_1 = require("./dto/upload-resume.dto");
const resume_service_1 = require("./resume.service");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const roles_enum_1 = require("../auth/types/roles.enum");
const update_resume_dto_1 = require("./dto/update-resume.dto");
const decorators_1 = require("../../common/decorators");
let ResumeController = class ResumeController {
    constructor(resumeService) {
        this.resumeService = resumeService;
    }
    async uploadFile(file, body, subId) {
        return await this.resumeService.saveFile(subId, file, body);
    }
    async deleteFile(id) {
        return await this.resumeService.deleteFile(id);
    }
    async findUnverifieds() {
        return await this.resumeService.findUnverifieds();
    }
    async findById(fileId) {
        return await this.resumeService.findByIdOrThrowExpection(fileId);
    }
    async accept(fileId) {
        return await this.resumeService.accept(fileId);
    }
    async update(id, updateFileDto) {
        return await this.resumeService.update(id, updateFileDto);
    }
};
exports.ResumeController = ResumeController;
__decorate([
    (0, common_1.Post)(':subId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [new common_1.MaxFileSizeValidator({ maxSize: 1042 * 1024 * 100 })],
    }))),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('subId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, upload_resume_dto_1.UploadResumeDto, Number]),
    __metadata("design:returntype", Promise)
], ResumeController.prototype, "uploadFile", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResumeController.prototype, "deleteFile", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin),
    (0, common_1.Get)('unverifieds'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ResumeController.prototype, "findUnverifieds", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResumeController.prototype, "findById", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin),
    (0, common_1.Post)('accept/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResumeController.prototype, "accept", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin),
    (0, common_1.Patch)('update/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_resume_dto_1.UpdateResumeDto]),
    __metadata("design:returntype", Promise)
], ResumeController.prototype, "update", null);
exports.ResumeController = ResumeController = __decorate([
    (0, common_1.Controller)('resume'),
    __metadata("design:paramtypes", [resume_service_1.ResumeService])
], ResumeController);
//# sourceMappingURL=resume.controller.js.map