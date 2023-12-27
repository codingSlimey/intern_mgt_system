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
exports.CompanyRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CompanyRepository = class CompanyRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAllCompanies() {
        return await this.prismaService.company.findMany({});
    }
    async findCompany(companyId) {
        return await this.prismaService.company.findUnique({
            where: {
                id: companyId
            }
        });
    }
    async findSupervisors(companyId) {
        const company = await this.prismaService.company.findUnique({
            where: {
                id: companyId
            },
            include: {
                superviser: true,
            },
        });
        return company?.superviser || [];
    }
    async createCompany(createCompnayDto) {
        return await this.prismaService.company.create({
            data: {
                description: createCompnayDto.description,
                email: createCompnayDto.email,
                logo: createCompnayDto.logo,
                postalAddr: createCompnayDto.postalAddr,
                telephoneNumber: createCompnayDto.telephoneNumber,
                webAddr: createCompnayDto.webAddr,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                fax: createCompnayDto.fax,
                workingFields: createCompnayDto.workingFields
            }
        });
    }
    async updateCompany(updateCompanyDto) {
        return await this.prismaService.company.upsert({
            create: {
                description: updateCompanyDto.description,
                email: updateCompanyDto.email,
                logo: updateCompanyDto.logo,
                postalAddr: updateCompanyDto.postalAddr,
                telephoneNumber: updateCompanyDto.telephoneNumber,
                webAddr: updateCompanyDto.webAddr,
                fax: updateCompanyDto.fax,
                workingFields: updateCompanyDto.workingFields,
            },
            update: {
                updatedAt: new Date().toISOString()
            },
            where: {
                id: updateCompanyDto.id
            }
        });
    }
    async deleteCompany(companyId) {
        const res = await this.prismaService.company.delete({
            where: {
                id: companyId
            }
        });
        if (res) {
            return true;
        }
        else
            return false;
    }
};
exports.CompanyRepository = CompanyRepository;
exports.CompanyRepository = CompanyRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CompanyRepository);
//# sourceMappingURL=company.repository.js.map