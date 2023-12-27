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
exports.DepartmentService = void 0;
const common_1 = require("@nestjs/common");
const department_repository_1 = require("./department.repository");
let DepartmentService = class DepartmentService {
    constructor(departmentRepository) {
        this.departmentRepository = departmentRepository;
    }
    async findAllDepartments() {
        return await this.departmentRepository.findAllDepartments();
    }
    async findDepartment(departmentId) {
        return await this.departmentRepository.findDepartment(departmentId);
    }
    async findCoordinators(departmentId) {
        return await this.departmentRepository.findCoordinators(departmentId);
    }
    async createDepartment(createdepartmentDto) {
        return await this.departmentRepository.createDepartment(createdepartmentDto);
    }
    async updateDepartment(updatedepartmentDto) {
        return await this.departmentRepository.updateDepartment(updatedepartmentDto);
    }
    async deleteDepartment(departmentId) {
        return await this.departmentRepository.deleteDepartment(departmentId);
    }
};
exports.DepartmentService = DepartmentService;
exports.DepartmentService = DepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [department_repository_1.DepartmentRepository])
], DepartmentService);
//# sourceMappingURL=department.service.js.map