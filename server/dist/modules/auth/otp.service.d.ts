import { Verification } from '@prisma/client';
export declare class OtpService {
    private readonly TWO_WEEKS_IN_MS;
    private readonly OTP_EXPIRATION_TIME_MS;
    private readonly MAX_OTP_REQUEST_ATTEMPTS;
    generate(): number;
    isValid(otp: number, verification: Verification): Promise<boolean>;
    requestesALot(numberOfAttampt: number, lastResendTime: Date): boolean;
    validate(otp: number, verification: Verification): Promise<void>;
}
