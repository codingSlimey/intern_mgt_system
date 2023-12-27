import { CompanyService } from './company.service';
import { CreateDto } from './dto/company.dto';
import { Company, Superviser } from '@prisma/client';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    getAllCompanies(): Promise<Company[]>;
    getCompany(companyId: number): Promise<Company>;
    getSupervisors(companyId: number): Promise<Superviser[]>;
    createCompany(createCompanyDto: CreateDto): Promise<Company>;
    updateCompany(companyId: number, updateCompanyDto: Partial<Company>): Promise<Company>;
    deleteCompany(companyId: number): Promise<boolean>;
}
