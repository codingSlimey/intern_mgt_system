import { WorkingFields } from '@prisma/client';
export declare class CreateDto {
    workingFields: WorkingFields[];
    postalAddr: number;
    fax?: number;
    telephoneNumber: string;
    email: string;
    webAddr: string;
    logo: string;
    description: string;
}
