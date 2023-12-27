import { StudentRepository } from './student.repository';
export declare class StudentService {
    private readonly studentRepository;
    constructor(studentRepository: StudentRepository);
    create(user: any): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    findByEmail(email: string): Promise<boolean>;
}
