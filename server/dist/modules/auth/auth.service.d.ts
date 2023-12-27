import { LoginDto } from './dtos/login.dto';
import { StudentRepository } from '../student/student.repository';
import { JwtPayload, Tokens, UserType } from './types';
import { JwtService } from '@nestjs/jwt';
import { SuperviserSignUpDto, CoordinatorSignUpDto, StudentSignUpDto, VerificationDto } from './dtos/signup.dto';
import { AuthRepository } from './auth.repository';
import { OtpService } from './otp.service';
import { MailService } from '../mail/mail.service';
import { CoordinatorRepository } from '../coordinator/coordinator.repository';
import { SuperviserRepository } from '../superviser/superviser.repository';
export declare class AuthService {
    private readonly studentRepository;
    private readonly coordinatorRepository;
    private readonly superviserRepository;
    private readonly jwtService;
    private readonly authRepository;
    private readonly otp;
    private readonly mailService;
    constructor(studentRepository: StudentRepository, coordinatorRepository: CoordinatorRepository, superviserRepository: SuperviserRepository, jwtService: JwtService, authRepository: AuthRepository, otp: OtpService, mailService: MailService);
    login(userType: UserType, loginUser: LoginDto): Promise<Tokens>;
    getTokens(payload: JwtPayload): Promise<Tokens>;
    signToken(payload: JwtPayload, secretKey: string, options: any): Promise<string>;
    logout(userId: number): Promise<boolean>;
    updateRefreshTokenHash(sub: number, refresh_token: string): Promise<void>;
    refreshTokens(userId: number, refreshToken: string): Promise<Tokens>;
    sendCode(verificationDto: VerificationDto): Promise<{
        success: boolean;
    }>;
    updatePassword(password: string, id: number, token: string): Promise<{
        success: boolean;
    }>;
    validateResetPasswordToken(id: number, token: string): Promise<{
        sucess: boolean;
        message?: undefined;
    } | {
        message: string;
        sucess?: undefined;
    }>;
    validateEmailForSignUp(userType: UserType, email: string): Promise<boolean | undefined>;
    generateUniqueLink(email: string): Promise<{
        sucess: boolean;
    }>;
    validateVerifications(email: string, otp: number): Promise<boolean | undefined>;
    signUp(signUPDto: SuperviserSignUpDto | CoordinatorSignUpDto | StudentSignUpDto): Promise<Tokens>;
}
