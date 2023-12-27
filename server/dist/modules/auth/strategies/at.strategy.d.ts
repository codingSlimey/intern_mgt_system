import { Request } from 'express';
import { JwtPayload } from '../types/Payload.type';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    Extract(request: Request): string | null;
    validate(payload: JwtPayload): JwtPayload;
}
export {};
