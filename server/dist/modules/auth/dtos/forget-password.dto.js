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
exports.ResetPasswordtDto = exports.ForgetPasswordDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const password_util_1 = require("../../../common/utils/password.util");
class ForgetPasswordDto {
}
exports.ForgetPasswordDto = ForgetPasswordDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => value.toLowerCase()),
    __metadata("design:type", String)
], ForgetPasswordDto.prototype, "email", void 0);
class ResetPasswordtDto {
}
exports.ResetPasswordtDto = ResetPasswordtDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8, { message: 'password is too short' }),
    (0, class_validator_1.MaxLength)(50, { message: 'password is too long' }),
    __metadata("design:type", String)
], ResetPasswordtDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.Validate)(password_util_1.CustomMatchPasswords, ['password']),
    __metadata("design:type", String)
], ResetPasswordtDto.prototype, "passwordConfirm", void 0);
//# sourceMappingURL=forget-password.dto.js.map