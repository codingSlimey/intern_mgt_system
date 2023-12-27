import { DepartmentService } from './department.service';
import { CreateDto } from './dto/department.dto';
import { Coordinator, Department } from '@prisma/client';
export declare class DepartmentController {
    private readonly departmentService;
    constructor(departmentService: DepartmentService);
    getAllCompanies(): Promise<Department[]>;
    getDepartment(departmentId: number): Promise<Department>;
    getSupervisors(departmentId: number): Promise<Coordinator[]>;
    createDepartment(createDepartmentDto: CreateDto): Promise<Department>;
    updateDepartment(departmentId: number, updateDepartmentDto: Partial<Department>): Promise<Department>;
    deleteDepartment(departmentId: number): Promise<boolean>;
}
