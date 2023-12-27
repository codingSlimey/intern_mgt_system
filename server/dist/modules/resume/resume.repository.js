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
exports.ResumeRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ResumeRepository = class ResumeRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async saveFile(applicationId, fileName, type, size, uploadFileDto) {
        return this.prisma.resume.create({
            data: {
                name: uploadFileDto.name,
                size: size,
                application: { connect: { id: applicationId } },
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
        });
    }
    async findById(id) {
        return this.prisma.resume.findUnique({ where: { id: id } });
    }
    async findByUrl(name) {
        return await this.prisma.resume.findFirst({ where: { name } });
    }
    async update(id, updateFileDto) {
        return this.prisma.resume.update({
            where: { id },
            data: {
                name: updateFileDto.name,
                updatedAt: new Date().toISOString(),
            },
        });
    }
    async findUnverifieds() {
        return this.prisma.resume.findMany({
            where: { isVerified: false },
            include: { application: { include: { student: true } } },
        });
    }
    async accept(id) {
        return this.prisma.resume.update({
            where: { id: id },
            data: {
                isVerified: true,
                updatedAt: new Date().toISOString(),
            },
        });
    }
    async delete(id) {
        return this.prisma.resume.delete({ where: { id: id } });
    }
};
exports.ResumeRepository = ResumeRepository;
exports.ResumeRepository = ResumeRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ResumeRepository);
//# sourceMappingURL=resume.repository.js.map