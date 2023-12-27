"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3ManagerModule = void 0;
const common_1 = require("@nestjs/common");
const s3_manager_controller_1 = require("./s3-manager.controller");
const s3_manager_service_1 = require("./s3-manager.service");
const aws_sdk_1 = require("aws-sdk");
const nest_aws_sdk_1 = require("nest-aws-sdk");
let S3ManagerModule = class S3ManagerModule {
};
exports.S3ManagerModule = S3ManagerModule;
exports.S3ManagerModule = S3ManagerModule = __decorate([
    (0, common_1.Module)({
        imports: [nest_aws_sdk_1.AwsSdkModule.forFeatures([aws_sdk_1.S3])],
        controllers: [s3_manager_controller_1.S3ManagerController],
        providers: [s3_manager_service_1.S3ManagerService],
        exports: [s3_manager_service_1.S3ManagerService],
    })
], S3ManagerModule);
//# sourceMappingURL=s3-manager.module.js.map