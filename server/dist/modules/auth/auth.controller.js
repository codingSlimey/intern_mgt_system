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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const rt_guard_1 = require("./guards/rt.guard");
const auth_service_1 = require("./auth.service");
const login_dto_1 = require("./dtos/login.dto");
const types_1 = require("./types");
const decorators_1 = require("../../common/decorators");
const forget_password_dto_1 = require("./dtos/forget-password.dto");
const signup_dto_1 = require("./dtos/signup.dto");
const decorators_2 = require("../../common/decorators/");
const token_interceptor_1 = require("../../common/interceptors/token.interceptor");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
        this.atExp = 15 * 60 * 1000;
        this.rtExp = 7 * 24 * 60 * 60 * 1000;
        this.setCookie = (res, name, value, maxAge) => {
            const cookieOptions = {
                maxAge,
                httpOnly: true,
                domain: process.env.NODE_ENV === 'production' ? '.emu.edu.tr' : '',
                secure: process.env.NODE_ENV === 'production' ? true : false,
                sameSite: process.env.NODE_ENV === 'production' ? 'lax' : false,
            };
            res.cookie(name, value, cookieOptions);
        };
    }
    async signup(signUpDto, res) {
        const tokens = await this.authService.signUp(signUpDto);
        this.setCookie(res, 'access_token', tokens.accessToken, this.atExp);
        this.setCookie(res, 'refresh_token', tokens.refreshToken, this.rtExp);
        return { success: true };
    }
    async init(req) {
        const user = req.user;
        return {
            name: user.name,
            email: user.email,
            role: user.role,
        };
    }
    async login(userType, loginDto, req, res) {
        const tokens = await this.authService.login(userType, loginDto);
        this.setCookie(res, 'access_token', tokens.accessToken, this.atExp);
        this.setCookie(res, 'refresh_token', tokens.refreshToken, this.rtExp);
        return res.send({ success: true });
    }
    async logout(res, req, userId) {
        console.log(req.user);
        const isLoggedOut = await this.authService.logout(userId);
        const clearCookieOptions = {
            httpOnly: true,
            domain: process.env.NODE_ENV === 'production' ? '.cookiefoo.ir' : '',
            secure: process.env.NODE_ENV === 'production' ? true : false,
            sameSite: process.env.NODE_ENV === 'production' ? 'lax' : false,
        };
        res.clearCookie('access_token', clearCookieOptions);
        res.clearCookie('refresh_token', clearCookieOptions);
        return res.send(isLoggedOut);
    }
    async sendCode(verificationDto) {
        const { userType, email } = verificationDto;
        return await this.authService.sendCode(verificationDto);
    }
    async refreshTokens(userId, refreshtoken, res) {
        const tokens = await this.authService.refreshTokens(userId, refreshtoken);
        this.setCookie(res, 'access_token', tokens.accessToken, this.atExp);
        this.setCookie(res, 'refresh_token', tokens.refreshToken, this.rtExp);
        return res.send({ sucess: true });
    }
    async forgetPassword(body) {
        return await this.authService.generateUniqueLink(body.email);
    }
    async validateResetPasswordToken(id, token) {
        return await this.authService.validateResetPasswordToken(id, token);
    }
    async RestPassword(id, token, body) {
        return await this.authService.updatePassword(body.password, id, token);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseInterceptors)(token_interceptor_1.TokenInterceptor),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "init", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('userType')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, login_dto_1.LoginDto, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('logout'),
    (0, common_1.UseInterceptors)(token_interceptor_1.TokenInterceptor),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, decorators_2.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Number]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('send-code'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.VerificationDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendCode", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.UseGuards)(rt_guard_1.RtGuard),
    (0, common_1.Get)('refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, decorators_2.GetCurrentUserId)()),
    __param(1, (0, decorators_1.GetCurrentUser)('refreshToken')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTokens", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('forget-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forget_password_dto_1.ForgetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgetPassword", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('reset-password/:id/:token'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "validateResetPasswordToken", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('reset-password/:id/:token'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('token')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, forget_password_dto_1.ResetPasswordtDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "RestPassword", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map