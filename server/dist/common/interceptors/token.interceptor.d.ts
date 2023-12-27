import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/modules/auth/types/';
export declare class TokenInterceptor implements NestInterceptor {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<import("rxjs").Observable<any>>;
    extractFromJwt(accessToken: string): Promise<JwtPayload>;
}
