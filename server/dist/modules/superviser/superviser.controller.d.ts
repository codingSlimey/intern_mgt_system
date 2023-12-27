import { SuperviserService } from './superviser.service';
export declare class SuperviserController {
    private readonly superviserService;
    constructor(superviserService: SuperviserService);
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<string>;
}
