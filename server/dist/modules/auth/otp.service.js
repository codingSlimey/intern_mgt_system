"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpService = void 0;
const common_1 = require("@nestjs/common");
const hash_util_1 = require("../../common/utils/hash.util");
(0, common_1.Injectable)();
class OtpService {
    constructor() {
        this.TWO_WEEKS_IN_MS = 2 * 7 * 24 * 60 * 60 * 1000;
        this.OTP_EXPIRATION_TIME_MS = 5 * 60 * 1000;
        this.MAX_OTP_REQUEST_ATTEMPTS = 10;
    }
    generate() {
        return Math.floor(Math.random() * 9000 + 1000);
    }
    async isValid(otp, verification) {
        const timeNow = Date.now();
        const lastResendTime = new Date(verification.lastResendTime).getTime();
        const expirationTime = lastResendTime + this.OTP_EXPIRATION_TIME_MS;
        if (timeNow > expirationTime) {
            throw new common_1.NotAcceptableException('time out');
        }
        return await hash_util_1.Hash.compare(`${otp}`, verification.code);
    }
    requestesALot(numberOfAttampt, lastResendTime) {
        const lastResendTimeMs = new Date(lastResendTime).getTime();
        const isPassedTwoWeeksFromLastResend = lastResendTimeMs + this.TWO_WEEKS_IN_MS < Date.now();
        return (numberOfAttampt > this.MAX_OTP_REQUEST_ATTEMPTS &&
            !isPassedTwoWeeksFromLastResend);
    }
    async validate(otp, verification) {
        const isValid = await this.isValid(otp, verification);
        if (!isValid) {
            throw new common_1.BadRequestException('code is not valid');
        }
    }
}
exports.OtpService = OtpService;
//# sourceMappingURL=otp.service.js.map