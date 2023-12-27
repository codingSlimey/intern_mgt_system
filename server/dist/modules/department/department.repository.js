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
exports.DepartmentRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const department_dto_1 = require("./dto/department.dto");
let DepartmentRepository = class DepartmentRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAllDepartments() {
        return await this.prismaService.department.findMany({});
    }
    async findDepartment(departmentId) {
        return await this.prismaService.department.findUnique({
            where: {
                id: departmentId
            }
        });
    }
    async findCoordinators(departmentId) {
        const res = await this.prismaService.department.findUnique({
            where: {
                id: departmentId
            },
            select: {
                coordinator: {
                    include: {
                        user: true
                    }
                },
            },
        });
        return res?.coordinator || [];
    }
    async createDepartment(createDepartmentDto) {
        return await this.prismaService.department.create({
            data: {
                name: department_dto_1.CreateDto.name,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            }
        });
    }
    async updateDepartment(updateDepartmentDto) {
        return await this.prismaService.department.upsert({
            create: {
                name: department_dto_1.CreateDto.name
            },
            update: {
                updatedAt: new Date().toISOString()
            },
            where: {
                id: updateDepartmentDto.id
            }
        });
    }
    async deleteDepartment(departmentId) {
        const res = await this.prismaService.department.delete({
            where: {
                id: departmentId
            }
        });
        if (res) {
            return true;
        }
        else
            return false;
    }
};
exports.DepartmentRepository = DepartmentRepository;
exports.DepartmentRepository = DepartmentRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DepartmentRepository);
//# sourceMappingURL=department.repository.js.map