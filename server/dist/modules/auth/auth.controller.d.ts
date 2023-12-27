import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { Response, Request } from 'express';
import { UserInit, UserType } from './types';
import { ForgetPasswordDto, ResetPasswordtDto } from './dtos/forget-password.dto';
import { CoordinatorSignUpDto, StudentSignUpDto, SuperviserSignUpDto, VerificationDto } from './dtos/signup.dto';
export declare class AuthController {
    private readonly authService;
    private readonly atExp;
    private readonly rtExp;
    constructor(authService: AuthService);
    private setCookie;
    signup(signUpDto: StudentSignUpDto | CoordinatorSignUpDto | SuperviserSignUpDto, res: Response): Promise<{
        success: boolean;
    }>;
    init(req: any): Promise<UserInit>;
    login(userType: UserType, loginDto: LoginDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(res: Response, req: any, userId: number): Promise<Response<any, Record<string, any>>>;
    sendCode(verificationDto: VerificationDto): Promise<{
        success: boolean;
    }>;
    refreshTokens(userId: number, refreshtoken: string, res: Response): Promise<Response<any, Record<string, any>>>;
    forgetPassword(body: ForgetPasswordDto): Promise<{
        sucess: boolean;
    }>;
    validateResetPasswordToken(id: number, token: string): Promise<{
        sucess: boolean;
        message?: undefined;
    } | {
        message: string;
        sucess?: undefined;
    }>;
    RestPassword(id: number, token: string, body: ResetPasswordtDto): Promise<{
        success: boolean;
    }>;
}
