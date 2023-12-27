"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("./modules/prisma/prisma.module");
const student_module_1 = require("./modules/student/student.module");
const coordinator_module_1 = require("./modules/coordinator/coordinator.module");
const superviser_module_1 = require("./modules/superviser/superviser.module");
const application_module_1 = require("./modules/application/application.module");
const company_module_1 = require("./modules/company/company.module");
const auth_module_1 = require("./modules/auth/auth.module");
const s3_manager_module_1 = require("./modules/s3-manager/s3-manager.module");
const config_1 = require("@nestjs/config");
const department_module_1 = require("./modules/department/department.module");
const core_1 = require("@nestjs/core");
const http_exception_filter_1 = require("./common/exceptions/http.exception.filter");
const resume_module_1 = require("./modules/resume/resume.module");
const image_module_1 = require("./modules/image/image.module");
const platform_express_1 = require("@nestjs/platform-express");
const nest_aws_sdk_1 = require("nest-aws-sdk");
const passport_1 = require("@nestjs/passport");
const logger_middleware_1 = require("./common/utils/logger.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule,
            prisma_module_1.PrismaModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            student_module_1.StudentModule,
            coordinator_module_1.CoordinatorModule,
            superviser_module_1.SuperviserModule,
            application_module_1.ApplicationModule,
            company_module_1.CompanyModule,
            department_module_1.DepartmentModule,
            s3_manager_module_1.S3ManagerModule,
            resume_module_1.ResumeModule,
            image_module_1.ImageModule,
            platform_express_1.MulterModule.register(),
            nest_aws_sdk_1.AwsSdkModule.forRoot({
                defaultServiceOptions: {
                    accessKeyId: process.env.LIARA_ACCESS_KEY,
                    secretAccessKey: process.env.LIARA_SECRET_KEY,
                    endpoint: process.env.LIARA_ENDPOINT,
                },
            }),
            passport_1.PassportModule.register({
                defaultStrategy: 'google',
                session: false,
            }),
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: http_exception_filter_1.AllExpectionsFilter,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map