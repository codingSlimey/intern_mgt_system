import { ArgumentsHost, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { HttpAdapterHost } from '@nestjs/core';
export declare class AllExpectionsFilter implements ExceptionFilter {
    private readonly httpAdapterHost;
    constructor(httpAdapterHost: HttpAdapterHost);
    private logger;
    catch(exception: unknown, host: ArgumentsHost): void;
    inferSystemError(exception: any, ctx: HttpArgumentsHost): {
        statusCode: number;
        timeStamp: string;
        message: string | object;
        path: any;
    };
    inferDateBaseErorr(exception: any, ctx: HttpArgumentsHost): {
        statusCode: HttpStatus;
        timeStamp: string;
        message: string;
        path: any;
    };
    inferUnHandeledErorr(exception: any, ctx: HttpArgumentsHost): {
        statusCode: HttpStatus;
        timeStamp: string;
        message: string;
        path: any;
    };
}
