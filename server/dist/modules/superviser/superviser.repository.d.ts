import { PrismaService } from "../prisma/prisma.service";
import { Superviser } from '../../common/interfaces/users.interface';
export declare class SuperviserRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    find(email: string): Promise<any | undefined>;
    findAll(): Promise<any[]>;
    findUnique(id: number): Promise<any>;
    logout(userId: number): Promise<any>;
    updateRefreshTokenHash(userId: number, hashedRT: string): Promise<void>;
    upsert(user: Partial<Superviser>): Promise<any>;
    create(user: Partial<Superviser>): Promise<{
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        hashedPassword: string;
        createdAt: Date;
        updatedAt: Date;
        hashedRT: string;
        lastLoggedInTime: Date;
        phone: string;
    }>;
    findById(id: number): Promise<any>;
    updatePassword(id: number, hashedPassword: string): Promise<{
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        hashedPassword: string;
        createdAt: Date;
        updatedAt: Date;
        hashedRT: string;
        lastLoggedInTime: Date;
        phone: string;
    }>;
}
