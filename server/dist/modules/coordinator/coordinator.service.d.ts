import { CoordinatorRepository } from './coordinator.repository';
export declare class CoordinatorService {
    private readonly coordinatorRepository;
    constructor(coordinatorRepository: CoordinatorRepository);
    create(user: any): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    findByEmail(email: string): Promise<boolean>;
    getAllDepartments(): Promise<void>;
}
