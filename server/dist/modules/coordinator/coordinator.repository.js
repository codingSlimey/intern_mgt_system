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
exports.CoordinatorRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CoordinatorRepository = class CoordinatorRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAllDepartments() {
    }
    async find(email) {
        return await this.prismaService.coordinator.findFirst({ where: { email: email }, include: { user: true } });
    }
    async findAll() {
        return await this.prismaService.coordinator.findMany({ include: { user: true } });
    }
    async findUnique(id) {
        return await this.prismaService.coordinator.findUnique({ where: { id: id }, include: { user: true } });
    }
    async logout(userId) {
        await this.prismaService.coordinator.update({
            where: {
                id: userId,
            },
            data: {
                user: {
                    update: {
                        hashedRT: null,
                    },
                },
            },
        });
        return true;
    }
    async updateRefreshTokenHash(userId, hashedRT) {
        await this.prismaService.user.update({
            where: {
                id: userId,
            },
            data: {
                hashedRT,
            },
        });
    }
    async upsert(user) {
        return await this.prismaService.user.upsert({
            create: {
                firstname: user.firstname,
                lastname: user.lastname,
                phone: user.phone,
                hashedPassword: user?.hashedPassword,
                email: user.email,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                lastLoggedInTime: new Date().toISOString(),
                role: user.role,
                image: {
                    create: {
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        name: ""
                    }
                },
                coordinator: {
                    create: {
                        department: {
                            connect: {
                                id: user.departmentId,
                            }
                        },
                        email: user.email,
                    }
                }
            },
            update: {
                lastLoggedInTime: new Date().toISOString(),
            },
            where: { id: user.id },
        });
    }
    async create(user) {
        return await this.prismaService.user.create({
            data: {
                email: user.email,
                phone: user.phone,
                firstname: user.firstname,
                lastname: user.lastname,
                updatedAt: new Date().toISOString(),
                lastLoggedInTime: new Date().toISOString(),
                hashedPassword: user?.hashedPassword,
                role: user.role,
            },
        });
    }
    async findById(id) {
        return await this.prismaService.user.findUnique({ where: { id }, include: { coordinator: true } });
    }
    async updatePassword(id, hashedPassword) {
        return await this.prismaService.user.update({
            where: { id },
            data: {
                hashedPassword: hashedPassword,
            },
        });
    }
};
exports.CoordinatorRepository = CoordinatorRepository;
exports.CoordinatorRepository = CoordinatorRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CoordinatorRepository);
//# sourceMappingURL=coordinator.repository.js.map