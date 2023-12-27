import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    example(): Promise<string>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<string>;
}
