import { PrismaService } from "../prisma/prisma.service";
import { Department } from "@prisma/client";
import { CreateDto } from "./dto/department.dto";
export declare class DepartmentRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAllDepartments(): Promise<Department[]>;
    findDepartment(departmentId: number): Promise<Department>;
    findCoordinators(departmentId: number): Promise<any>;
    createDepartment(createDepartmentDto: CreateDto): Promise<Department>;
    updateDepartment(updateDepartmentDto: Partial<Department>): Promise<Department>;
    deleteDepartment(departmentId: number): Promise<boolean>;
}
