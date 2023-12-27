import { Company, Superviser } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDto } from './dto/company.dto';
export declare class CompanyRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAllCompanies(): Promise<Company[]>;
    findCompany(companyId: number): Promise<Company>;
    findSupervisors(companyId: number): Promise<Superviser[]>;
    createCompany(createCompnayDto: CreateDto): Promise<Company>;
    updateCompany(updateCompanyDto: Partial<Company>): Promise<Company>;
    deleteCompany(companyId: number): Promise<boolean>;
}
