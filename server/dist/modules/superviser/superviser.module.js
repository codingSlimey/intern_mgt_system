"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperviserModule = void 0;
const common_1 = require("@nestjs/common");
const superviser_service_1 = require("./superviser.service");
const superviser_controller_1 = require("./superviser.controller");
const superviser_repository_1 = require("./superviser.repository");
const prisma_service_1 = require("../prisma/prisma.service");
let SuperviserModule = class SuperviserModule {
};
exports.SuperviserModule = SuperviserModule;
exports.SuperviserModule = SuperviserModule = __decorate([
    (0, common_1.Module)({
        providers: [superviser_service_1.SuperviserService, superviser_repository_1.SuperviserRepository, prisma_service_1.PrismaService],
        controllers: [superviser_controller_1.SuperviserController]
    })
], SuperviserModule);
//# sourceMappingURL=superviser.module.js.map