import { SuperviserRepository } from './superviser.repository';
export declare class SuperviserService {
    private readonly superviserRepository;
    constructor(superviserRepository: SuperviserRepository);
    create(user: any): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    findByEmail(email: string): Promise<boolean>;
}
