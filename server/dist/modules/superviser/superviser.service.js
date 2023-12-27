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
exports.SuperviserService = void 0;
const common_1 = require("@nestjs/common");
const superviser_repository_1 = require("./superviser.repository");
let SuperviserService = class SuperviserService {
    constructor(superviserRepository) {
        this.superviserRepository = superviserRepository;
    }
    async create(user) {
        return await this.superviserRepository.upsert(user);
    }
    async findAll() {
        return await this.superviserRepository.findAll();
    }
    async findOne(id) {
        return await this.superviserRepository.findUnique(id);
    }
    async findByEmail(email) {
        return true;
    }
};
exports.SuperviserService = SuperviserService;
exports.SuperviserService = SuperviserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [superviser_repository_1.SuperviserRepository])
], SuperviserService);
//# sourceMappingURL=superviser.service.js.map