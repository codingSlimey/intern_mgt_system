import { Coordinator, Department } from '@prisma/client';
import { DepartmentRepository } from './department.repository';
import { CreateDto } from './dto/department.dto';
export declare class DepartmentService {
    private readonly departmentRepository;
    constructor(departmentRepository: DepartmentRepository);
    findAllDepartments(): Promise<Department[]>;
    findDepartment(departmentId: number): Promise<Department>;
    findCoordinators(departmentId: number): Promise<Coordinator[]>;
    createDepartment(createdepartmentDto: CreateDto): Promise<Department>;
    updateDepartment(updatedepartmentDto: Partial<Department>): Promise<Department>;
    deleteDepartment(departmentId: number): Promise<boolean>;
}
