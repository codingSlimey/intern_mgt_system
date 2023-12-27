import { Verification } from '@prisma/client';
import { VerificationDto } from './dtos/signup.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findVerification(email: string): Promise<Verification | undefined>;
    upsertVarification(user: VerificationDto, code: string): Promise<Verification>;
}
