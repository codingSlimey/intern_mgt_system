"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExpectionsFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const library_1 = require("@prisma/client/runtime/library");
let AllExpectionsFilter = class AllExpectionsFilter {
    constructor(httpAdapterHost) {
        this.httpAdapterHost = httpAdapterHost;
        this.logger = new common_1.Logger('HTTP');
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const { httpAdapter } = this.httpAdapterHost;
        const httpStatus = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const responseBody = this.inferSystemError(exception, ctx) ??
            this.inferDateBaseErorr(exception, ctx) ??
            this.inferUnHandeledErorr(exception, ctx);
        httpAdapter.reply(ctx.getResponse(), responseBody, responseBody.statusCode);
        console.log(exception);
    }
    inferSystemError(exception, ctx) {
        const { httpAdapter } = this.httpAdapterHost;
        if (exception instanceof common_1.HttpException) {
            if (exception.getStatus() >= 500) {
                this.logger.log(`server side expection occured${exception}`);
            }
            const message = exception.getStatus() >= 500
                ? "Something went wrong. Please try again later"
                : exception.getResponse();
            return {
                statusCode: exception.getStatus(),
                timeStamp: new Date().toISOString(),
                message: message,
                path: httpAdapter.getRequestUrl(ctx.getRequest()),
            };
        }
        return undefined;
    }
    inferDateBaseErorr(exception, ctx) {
        const { httpAdapter } = this.httpAdapterHost;
        if (exception instanceof library_1.PrismaClientKnownRequestError) {
            this.logger.log(`a prisma expection occures ${exception}`);
            return {
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                timeStamp: new Date().toISOString(),
                message: "Something went wrong. Please try again later",
                path: httpAdapter.getRequestUrl(ctx.getRequest()),
            };
        }
        return undefined;
    }
    inferUnHandeledErorr(exception, ctx) {
        const { httpAdapter } = this.httpAdapterHost;
        this.logger.log(`a new wierd expection occures ${exception}`);
        return {
            statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            timeStamp: new Date().toISOString(),
            message: "Something went wrong. Please try again later",
            path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };
    }
};
exports.AllExpectionsFilter = AllExpectionsFilter;
exports.AllExpectionsFilter = AllExpectionsFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [core_1.HttpAdapterHost])
], AllExpectionsFilter);
//# sourceMappingURL=http.exception.filter.js.map