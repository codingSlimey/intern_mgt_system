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
exports.ApplicationController = void 0;
const common_1 = require("@nestjs/common");
const application_service_1 = require("./application.service");
const passport_1 = require("@nestjs/passport");
const decorators_1 = require("../../common/decorators");
const application_dto_1 = require("./dto/application.dto");
const platform_express_1 = require("@nestjs/platform-express");
let ApplicationController = class ApplicationController {
    constructor(applicationService) {
        this.applicationService = applicationService;
    }
    async findApplicationsByCoordinatorId(user) {
        return await this.applicationService.findApplicationsByCoordinatorId(user.id);
    }
    async findApplicationsByStudentId(user) {
        return await this.applicationService.findApplicationsByStudentId(user.id);
    }
    async createApplication(user, createDto, file) {
        return await this.applicationService.createApplication(user.email, createDto, file);
    }
    async declineApplication(applicationId) {
        return await this.applicationService.declineApplication(applicationId);
    }
    async approveApplication(applicationId) {
        return await this.applicationService.approveApplication(applicationId);
    }
    async deleteApplication(applicationId) {
        return await this.applicationService.deleteApplication(applicationId);
    }
};
exports.ApplicationController = ApplicationController;
__decorate([
    (0, common_1.Get)('applications/coordinator'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local-passport')),
    __param(0, (0, decorators_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApplicationController.prototype, "findApplicationsByCoordinatorId", null);
__decorate([
    (0, common_1.Get)('applications/student'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local-passport')),
    __param(0, (0, decorators_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApplicationController.prototype, "findApplicationsByStudentId", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local-passport')),
    __param(0, (0, decorators_1.GetCurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, application_dto_1.createApplicationDto, Object]),
    __metadata("design:returntype", Promise)
], ApplicationController.prototype, "createApplication", null);
__decorate([
    (0, common_1.Patch)('decline'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local-passport')),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('applicatioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ApplicationController.prototype, "declineApplication", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local-passport')),
    __param(0, (0, common_1.Param)('applicatioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ApplicationController.prototype, "approveApplication", null);
__decorate([
    (0, common_1.Delete)('delete'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('applicatioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ApplicationController.prototype, "deleteApplication", null);
exports.ApplicationController = ApplicationController = __decorate([
    (0, common_1.Controller)('application'),
    __metadata("design:paramtypes", [application_service_1.ApplicationService])
], ApplicationController);
//# sourceMappingURL=application.controller.js.map