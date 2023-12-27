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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const company_repository_1 = require("./company.repository");
let CompanyService = class CompanyService {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async findAllCompanies() {
        return await this.companyRepository.findAllCompanies();
    }
    async findCompany(companyId) {
        return await this.companyRepository.findCompany(companyId);
    }
    async findSupervisors(companyId) {
        return await this.companyRepository.findSupervisors(companyId);
    }
    async createCompany(createCompanyDto) {
        return await this.companyRepository.createCompany(createCompanyDto);
    }
    async updateCompany(updateCompanyDto) {
        return await this.companyRepository.updateCompany(updateCompanyDto);
    }
    async deleteCompany(companyId) {
        return await this.companyRepository.deleteCompany(companyId);
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [company_repository_1.CompanyRepository])
], CompanyService);
//# sourceMappingURL=company.service.js.map