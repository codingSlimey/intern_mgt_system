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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3ManagerController = void 0;
const common_1 = require("@nestjs/common");
const index_1 = require("../../common/decorators/index");
const index_2 = require("../auth/types/index");
const s3_manager_service_1 = require("./s3-manager.service");
const platform_express_1 = require("@nestjs/platform-express");
const delete_object_dto_1 = require("./dto/delete-object.dto");
let S3ManagerController = class S3ManagerController {
    constructor(s3) {
        this.s3 = s3;
    }
    async listBuckets() {
        return await this.s3.listBuckets();
    }
    async listObjects(bucketName) {
        return this.s3.listObjects(bucketName);
    }
    async uploadFile(bucketName, file) {
        return await this.s3.uploadFile(bucketName, file);
    }
    async deleteObject(bucketName, body) {
        return await this.s3.deleteFile(bucketName, body.key);
    }
};
exports.S3ManagerController = S3ManagerController;
__decorate([
    (0, index_1.Roles)(index_2.Role.Admin),
    (0, common_1.Get)('buckets'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], S3ManagerController.prototype, "listBuckets", null);
__decorate([
    (0, index_1.Roles)(index_2.Role.Admin),
    (0, common_1.Get)('buckets/:bucketName'),
    __param(0, (0, common_1.Param)('bucketName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], S3ManagerController.prototype, "listObjects", null);
__decorate([
    (0, index_1.Roles)(index_2.Role.Admin),
    (0, common_1.Post)('buckets/:bucketName'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('bucketName')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], S3ManagerController.prototype, "uploadFile", null);
__decorate([
    (0, index_1.Roles)(index_2.Role.Admin),
    (0, common_1.Delete)('buckets/:bucketName'),
    __param(0, (0, common_1.Param)('bucketName')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, delete_object_dto_1.DeleteObject]),
    __metadata("design:returntype", Promise)
], S3ManagerController.prototype, "deleteObject", null);
exports.S3ManagerController = S3ManagerController = __decorate([
    (0, common_1.Controller)('s3-manager'),
    __metadata("design:paramtypes", [s3_manager_service_1.S3ManagerService])
], S3ManagerController);
//# sourceMappingURL=s3-manager.controller.js.map