"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hash = void 0;
const bcrypt = require("bcrypt");
class Hash {
    static async hash(code) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(code, salt);
            return hash;
        }
        catch (error) {
            console.log(error);
        }
    }
    static async compare(password, hash) {
        const isMatch = await bcrypt.compare(password, hash);
        return isMatch;
    }
}
exports.Hash = Hash;
//# sourceMappingURL=hash.util.js.map