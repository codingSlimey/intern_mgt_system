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
exports.TokenInterceptor = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let TokenInterceptor = class TokenInterceptor {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const accessToken = request?.cookies['access_token'];
        if (accessToken) {
            const decoded = await this.extractFromJwt(accessToken);
            request.user = decoded;
        }
        return next.handle();
    }
    async extractFromJwt(accessToken) {
        try {
            const decoded = await this.jwtService.verify(accessToken, {
                secret: process.env.SECRET_KEY,
            });
            return { sub: decoded.sub, role: decoded.role, email: decoded.email };
        }
        catch (error) {
            return;
        }
    }
};
exports.TokenInterceptor = TokenInterceptor;
exports.TokenInterceptor = TokenInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], TokenInterceptor);
//# sourceMappingURL=token.interceptor.js.map