import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateDto } from './dto/company.dto';
import { Roles } from 'src/common/decorators';
import { Role } from '../auth/types';
import { Company, Superviser } from '@prisma/client';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Get('companies')
    @HttpCode(HttpStatus.OK)
    async getAllCompanies(): Promise<Company[]> {
        return await this.companyService.findAllCompanies();
    }

    @Get('company')
    @HttpCode(HttpStatus.OK)
    async getCompany(@Body('companyId', ParseIntPipe) companyId: number): Promise<Company> {
        return await this.companyService.findCompany(companyId);
    }

    @Get('supervisors')
    @HttpCode(HttpStatus.OK)
    async getSupervisors(@Body('companyId', ParseIntPipe) companyId: number): Promise<Superviser[]> {
        return await this.companyService.findSupervisors(companyId);
    }

    @Post('create-company')
    @HttpCode(HttpStatus.CREATED)
    // @Roles(Role.Admin)
    async createCompany(@Body() createCompanyDto: CreateDto): Promise<Company> {
        return await this.companyService.createCompany(createCompanyDto);
    }

    @Patch('update-company')
    @HttpCode(HttpStatus.OK)
    // @Roles(Role.Admin)
    async updateCompany(@Param('companyId', ParseIntPipe) companyId: number,
                        @Body() updateCompanyDto: Partial<Company>): Promise<Company> {
        return await this.companyService.updateCompany(updateCompanyDto)
    }

    @Delete('delete-company')
    @HttpCode(HttpStatus.NO_CONTENT)
    // @Roles(Role.Admin)
    async deleteCompany(@Param('companyId', ParseIntPipe) companyId: number): Promise<boolean> {
        return await this.companyService.deleteCompany(companyId);
    }
}
