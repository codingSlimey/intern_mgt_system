"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeModule = void 0;
const common_1 = require("@nestjs/common");
const resume_controller_1 = require("./resume.controller");
const resume_service_1 = require("./resume.service");
const resume_repository_1 = require("./resume.repository");
const application_module_1 = require("../application/application.module");
const s3_manager_module_1 = require("../s3-manager/s3-manager.module");
const application_service_1 = require("../application/application.service");
const prisma_service_1 = require("../prisma/prisma.service");
const application_repository_1 = require("../application/application.repository");
let ResumeModule = class ResumeModule {
};
exports.ResumeModule = ResumeModule;
exports.ResumeModule = ResumeModule = __decorate([
    (0, common_1.Module)({
        imports: [s3_manager_module_1.S3ManagerModule, application_module_1.ApplicationModule],
        controllers: [resume_controller_1.ResumeController],
        providers: [resume_service_1.ResumeService, resume_repository_1.ResumeRepository, application_service_1.ApplicationService, prisma_service_1.PrismaService, application_repository_1.ApplicationRepository]
    })
], ResumeModule);
//# sourceMappingURL=resume.module.js.map