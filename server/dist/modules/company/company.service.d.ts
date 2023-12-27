import { CompanyRepository } from './company.repository';
import { Company, Superviser } from '@prisma/client';
import { CreateDto } from './dto/company.dto';
export declare class CompanyService {
    private readonly companyRepository;
    constructor(companyRepository: CompanyRepository);
    findAllCompanies(): Promise<Company[]>;
    findCompany(companyId: number): Promise<Company>;
    findSupervisors(companyId: number): Promise<Superviser[]>;
    createCompany(createCompanyDto: CreateDto): Promise<Company>;
    updateCompany(updateCompanyDto: Partial<Company>): Promise<Company>;
    deleteCompany(companyId: number): Promise<boolean>;
}
