import { Request } from 'express';
import { JwtPayload, JwtPayloadWithRefreshToken } from '../types/Payload.type';
declare const RefreshTokenStrategy_base: new (...args: any[]) => any;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    constructor();
    Extract(request: Request): string | null;
    validate(req: Request, payload: JwtPayload): JwtPayloadWithRefreshToken;
}
export {};
