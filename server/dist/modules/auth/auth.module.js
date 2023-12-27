"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const at_strategy_1 = require("./strategies/at.strategy");
const rt_strategy_1 = require("./strategies/rt.strategy");
const student_repository_1 = require("../student/student.repository");
const mail_service_1 = require("../mail/mail.service");
const otp_service_1 = require("./otp.service");
const auth_repository_1 = require("./auth.repository");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const mail_module_1 = require("../mail/mail.module");
const coordinator_repository_1 = require("../coordinator/coordinator.repository");
const superviser_repository_1 = require("../superviser/superviser.repository");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({ secret: process.env.SECRET_KEY }),
            mail_module_1.MailModule,
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            auth_repository_1.AuthRepository,
            at_strategy_1.JwtStrategy,
            rt_strategy_1.RefreshTokenStrategy,
            student_repository_1.StudentRepository,
            coordinator_repository_1.CoordinatorRepository,
            superviser_repository_1.SuperviserRepository,
            mail_service_1.MailService,
            otp_service_1.OtpService,
            jwt_1.JwtService,
            prisma_service_1.PrismaService,
        ],
        exports: [student_repository_1.StudentRepository, prisma_service_1.PrismaService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map