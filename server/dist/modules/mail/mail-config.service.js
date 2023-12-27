"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailConfigSerivce = void 0;
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
let MailConfigSerivce = class MailConfigSerivce {
    createMailerOptions() {
        console.log(__dirname);
        return {
            transport: {
                host: process.env.MAIL_HOST,
                service: 'Gmail',
                secure: true,
                port: +process.env.MAIL_PORT,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASSWORD,
                },
                debug: true,
                logger: true,
            },
            defaults: {
                from: '"EMU INTERNSHIP APPLICATION" <info@mail.ima.emu.edu.tr>',
            },
            template: {
                dir: (0, path_1.join)(__dirname, '../../../src/modules/mail/', 'templates'),
                adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                options: {
                    strict: true,
                },
            },
        };
    }
};
exports.MailConfigSerivce = MailConfigSerivce;
exports.MailConfigSerivce = MailConfigSerivce = __decorate([
    (0, common_1.Injectable)()
], MailConfigSerivce);
//# sourceMappingURL=mail-config.service.js.map