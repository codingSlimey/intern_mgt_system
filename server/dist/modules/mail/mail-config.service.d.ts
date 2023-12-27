import { MailerOptions, MailerOptionsFactory } from '@nestjs-modules/mailer';
export declare class MailConfigSerivce implements MailerOptionsFactory {
    createMailerOptions(): MailerOptions | Promise<MailerOptions>;
}
