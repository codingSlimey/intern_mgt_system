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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const student_repository_1 = require("../student/student.repository");
const hash_util_1 = require("../../common/utils/hash.util");
const types_1 = require("./types");
const jwt_1 = require("@nestjs/jwt");
const auth_repository_1 = require("./auth.repository");
const otp_service_1 = require("./otp.service");
const mail_service_1 = require("../mail/mail.service");
const jsonwebtoken_1 = require("jsonwebtoken");
const coordinator_repository_1 = require("../coordinator/coordinator.repository");
const superviser_repository_1 = require("../superviser/superviser.repository");
let AuthService = class AuthService {
    constructor(studentRepository, coordinatorRepository, superviserRepository, jwtService, authRepository, otp, mailService) {
        this.studentRepository = studentRepository;
        this.coordinatorRepository = coordinatorRepository;
        this.superviserRepository = superviserRepository;
        this.jwtService = jwtService;
        this.authRepository = authRepository;
        this.otp = otp;
        this.mailService = mailService;
    }
    async login(userType, loginUser) {
        let user;
        if (userType == types_1.UserType.Student) {
            user = await this.studentRepository.find(loginUser.email);
        }
        else if (userType == types_1.UserType.Coordinator) {
            user = await this.coordinatorRepository.find(loginUser.email);
        }
        else if (userType == types_1.UserType.Superviser) {
            user = await this.superviserRepository.find(loginUser.email);
        }
        else {
            throw new common_1.BadRequestException('Invalid user type');
        }
        if (!user) {
            throw new common_1.BadRequestException('Email does not exist');
        }
        const isPasswordValid = await hash_util_1.Hash.compare(loginUser.password, user.hashedPassword);
        if (!isPasswordValid) {
            throw new common_1.BadRequestException('Credentials invalid');
        }
        const userData = {
            sub: user.id,
            role: user.role,
            email: user.email,
            type: userType
        };
        return await this.getTokens(userData);
    }
    async getTokens(payload) {
        const secretKey = process.env.SECRET_KEY;
        const accessTokenOptions = { expiresIn: '15m' };
        const refreshTokenOptions = { expiresIn: '7d' };
        const accessToken = await this.signToken(payload, secretKey, accessTokenOptions);
        const refreshToken = await this.signToken(payload, secretKey, refreshTokenOptions);
        await this.updateRefreshTokenHash(payload.sub, refreshToken);
        return { accessToken: accessToken, refreshToken: refreshToken };
    }
    async signToken(payload, secretKey, options) {
        return await this.jwtService.signAsync(payload, {
            secret: secretKey,
            ...options,
        });
    }
    async logout(userId) {
        return await this.studentRepository.logout(userId);
    }
    async updateRefreshTokenHash(sub, refresh_token) {
        const hashedRefreshToken = await hash_util_1.Hash.hash(refresh_token);
        await this.studentRepository.updateRefreshTokenHash(sub, hashedRefreshToken);
    }
    async refreshTokens(userId, refreshToken) {
        const student = await this.studentRepository.findById(userId);
        const coordinator = await this.coordinatorRepository.findById(userId);
        const superviser = await this.superviserRepository.findById(userId);
        let user;
        if (student) {
            user = student;
        }
        else if (coordinator) {
            user = coordinator;
        }
        else if (superviser) {
            user = superviser;
        }
        else {
            throw new common_1.BadRequestException('Invalid user type');
        }
        if (!user || !user.hashedRT)
            throw new common_1.ForbiddenException('Access Denied');
        const rtMatches = await hash_util_1.Hash.compare(refreshToken, user.hashedRT);
        if (!rtMatches)
            throw new common_1.ForbiddenException('Access Denied');
        return await this.getTokens({
            sub: user.id,
            role: user.role,
            email: user.email,
        });
    }
    async sendCode(verificationDto) {
        await this.validateEmailForSignUp(verificationDto.userType, verificationDto.email);
        const varification = await this.authRepository.findVerification(verificationDto.email);
        if (varification &&
            this.otp.requestesALot(varification.try, varification.lastResendTime)) {
            throw new common_1.BadRequestException('you have requested a lot');
        }
        const otp = this.otp.generate().toString();
        const hashedOtp = await hash_util_1.Hash.hash(otp);
        await this.authRepository.upsertVarification(verificationDto, hashedOtp);
        await this.mailService.sendOtp(+otp, verificationDto.email);
        return { success: true };
    }
    async updatePassword(password, id, token) {
        const user = await this.studentRepository.findById(id);
        if (!user) {
            throw new common_1.BadRequestException('user not found');
        }
        const secret = process.env.SECRET_KEY + user.hashedPassword;
        try {
            await this.jwtService.verify(token, { secret: secret });
            const hashedPassword = await hash_util_1.Hash.hash(password);
            await this.studentRepository.updatePassword(id, hashedPassword);
            return { success: true };
        }
        catch (error) {
            if (error instanceof jsonwebtoken_1.TokenExpiredError) {
                throw new common_1.UnauthorizedException('Token has expired');
            }
            else {
                throw new common_1.BadRequestException('Invalid token or password update failed');
            }
        }
    }
    async validateResetPasswordToken(id, token) {
        const user = await this.studentRepository.findById(id);
        if (!user) {
            throw new common_1.BadRequestException('user not found');
        }
        const secret = process.env.SECRET_KEY + user.hashedPassword;
        try {
            await this.jwtService.verify(token, { secret: secret });
            return { sucess: true };
        }
        catch (error) {
            return { message: 'some thing is manipulated Or link is expired...' };
        }
    }
    async validateEmailForSignUp(userType, email) {
        let user;
        if (userType === types_1.UserType.Student) {
            user = await this.studentRepository.find(email);
        }
        else if (userType === types_1.UserType.Coordinator) {
            user = await this.coordinatorRepository.find(email);
        }
        else if (userType === types_1.UserType.Superviser) {
            user = await this.superviserRepository.find(email);
        }
        else {
            throw new common_1.BadRequestException('Invalid user type');
        }
        if (user) {
            throw new common_1.HttpException('email already exists', 400);
        }
        return true;
    }
    async generateUniqueLink(email) {
        let user;
        user = await this.studentRepository.find(email);
        user = await this.coordinatorRepository.find(email);
        user = await this.superviserRepository.find(email);
        if (!user) {
            throw new common_1.BadRequestException('user not found');
        }
        const jwtPayload = {
            sub: user.id,
            role: user.role,
            email: user.email,
        };
        const secret = process.env.SECRET_KEY + user.hashedPassword;
        const token = await this.jwtService.sign(jwtPayload, {
            secret: secret,
            expiresIn: '15m',
        });
        const link = `https://eims.emu.edu.tr/new-password/${user.id}/${token}`;
        await this.mailService.forgetPassword(link, email);
        return { sucess: true };
    }
    async validateVerifications(email, otp) {
        const verification = await this.authRepository.findVerification(email);
        if (!verification) {
            throw new common_1.BadRequestException('not found');
        }
        await this.otp.validate(otp, verification);
        return true;
    }
    async signUp(signUPDto) {
        const isEmailVerified = await this.validateVerifications(signUPDto.email, signUPDto.otp);
        if (!isEmailVerified) {
            throw new common_1.UnauthorizedException('email is not verified');
        }
        const res = await this.validateEmailForSignUp(signUPDto.userType, signUPDto.email);
        const hashedPassword = await hash_util_1.Hash.hash(signUPDto.password);
        if (!res)
            throw new common_1.UnauthorizedException('Email is not validated yet');
        let user;
        if (signUPDto.userType == types_1.UserType.Student) {
            const studentSignUpDto = signUPDto;
            user = await this.studentRepository.create({
                email: studentSignUpDto.email,
                phone: studentSignUpDto.phone,
                studentNo: studentSignUpDto.studentNumber,
                firstname: studentSignUpDto.firstname,
                lastname: studentSignUpDto.lastname,
                hashedPassword: hashedPassword,
            });
        }
        else if (signUPDto.userType == types_1.UserType.Coordinator) {
            const studentSignUpDto = signUPDto;
            user = await this.coordinatorRepository.create({
                email: studentSignUpDto.email,
                phone: studentSignUpDto.phone,
                departmentId: studentSignUpDto.departmentId,
                firstname: studentSignUpDto.firstname,
                lastname: studentSignUpDto.lastname,
                hashedPassword: hashedPassword,
            });
        }
        else {
            const studentSignUpDto = signUPDto;
            user = await this.superviserRepository.create({
                email: studentSignUpDto.email,
                phone: studentSignUpDto.phone,
                position: studentSignUpDto.position,
                companyId: studentSignUpDto.companyId,
                firstname: studentSignUpDto.firstname,
                lastname: studentSignUpDto.lastname,
                hashedPassword: hashedPassword,
            });
        }
        return await this.getTokens({
            sub: user.id,
            role: user.role,
            email: user.email,
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [student_repository_1.StudentRepository,
        coordinator_repository_1.CoordinatorRepository,
        superviser_repository_1.SuperviserRepository,
        jwt_1.JwtService,
        auth_repository_1.AuthRepository,
        otp_service_1.OtpService,
        mail_service_1.MailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map