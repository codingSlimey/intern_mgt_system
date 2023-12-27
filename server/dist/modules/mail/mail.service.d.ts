import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private mailService;
    constructor(mailService: MailerService);
    sendOtp(otp: number, email: string): Promise<SentMessageInfo>;
    forgetPassword(link: string, email: string): Promise<SentMessageInfo>;
}
