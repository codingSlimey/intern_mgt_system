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
exports.ApplicationRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ApplicationRepository = class ApplicationRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findApplicationsByStudentId(studentId) {
        return await this.prismaService.application.findMany({
            where: {
                student: {
                    id: studentId
                }
            },
            include: {
                insurance: true,
                resume: true,
                student: true,
            }
        });
    }
    async findApplicationsByCoordinatorId(coordinatorId) {
        return await this.prismaService.application.findMany({
            where: {
                student: {
                    department: {
                        coordinator: {
                            id: coordinatorId
                        }
                    }
                }
            },
            include: {
                insurance: true,
                resume: true,
                student: true,
            }
        });
    }
    async findApplicationById(applicationId) {
        return await this.prismaService.application.findUnique({
            where: { id: applicationId },
            include: {
                resume: true,
                insurance: true,
            }
        });
    }
    async createApplication(email, createDto, resumeName, insuranceKey, insuranceFileData) {
        const user = await this.prismaService.user.findUnique({ where: { email: email }, include: { student: true } });
        return await this.prismaService.application.create({
            data: {
                days: createDto.days,
                name: createDto.name,
                email: email,
                student: {
                    connect: {
                        id: user.id
                    },
                },
                insurance: {
                    create: {
                        name: insuranceKey,
                        size: insuranceFileData.size,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                    }
                },
                cyprus: insuranceKey ? true : false,
                resume: {
                    create: {
                        name: resumeName,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        isVerified: false,
                    }
                }
            }
        });
    }
    async declineApplication(applicationId) {
        return await this.prismaService.application.update({
            data: {
                isApproved: false
            },
            where: {
                id: applicationId
            }
        });
    }
    async approveApplication(applicationId) {
        return await this.prismaService.application.update({
            data: {
                isApproved: true
            },
            where: {
                id: applicationId
            }
        });
    }
    async deleteApplication(applicationId) {
        return await this.prismaService.application.delete({
            where: {
                id: applicationId
            }
        });
    }
};
exports.ApplicationRepository = ApplicationRepository;
exports.ApplicationRepository = ApplicationRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ApplicationRepository);
//# sourceMappingURL=application.repository.js.map