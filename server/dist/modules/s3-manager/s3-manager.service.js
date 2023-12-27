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
exports.S3ManagerService = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
const path = require("path");
let S3ManagerService = class S3ManagerService {
    constructor() {
        AWS.config.update({
            accessKeyId: process.env.ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET_ACCESS_KEY,
        });
        this.s3 = new AWS.S3();
    }
    async listBuckets() {
        const listBuckets = await this.s3.listBuckets().promise();
        return listBuckets.Buckets;
    }
    async listObjects(bucket) {
        try {
            const data = await this.s3.listObjects({ Bucket: bucket }).promise();
            return data.Contents.map((c) => c.Key);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Error occurred");
        }
    }
    async uploadFile(bucket, file) {
        try {
            const fileUniqueName = await this.createUniqueFileKey(file.originalname);
            const key = `files/${fileUniqueName}`;
            await this.s3
                .putObject({
                Bucket: bucket,
                Body: file.buffer,
                ACL: 'public-read',
                Key: key,
            })
                .promise();
            return { key };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message, error);
        }
    }
    async deleteFile(bucket, fileName) {
        const params = {
            Bucket: bucket,
            Key: fileName,
        };
        try {
            await this.s3.deleteObject(params).promise();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Error occurred");
        }
    }
    async createUniqueFileKey(fileOriginalName) {
        const unixSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = path.extname(fileOriginalName);
        return `${path
            .parse(fileOriginalName)
            .name.replace(/\s/g, '')}${unixSuffix}${ext}`;
    }
};
exports.S3ManagerService = S3ManagerService;
exports.S3ManagerService = S3ManagerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], S3ManagerService);
//# sourceMappingURL=s3-manager.service.js.map