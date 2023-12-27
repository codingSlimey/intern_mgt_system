import { CoordinatorService } from './coordinator.service';
export declare class CoordinatorController {
    private readonly coordinatorService;
    constructor(coordinatorService: CoordinatorService);
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<string>;
    getAllDepartments(): Promise<void>;
}
