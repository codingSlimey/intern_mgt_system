import { UserType } from '../types';
export declare class VerificationDto {
    email: string;
    userType: UserType;
}
declare abstract class UserSignUpDto {
    userType: UserType;
    firstname: string;
    lastname: string;
    email: string;
    otp?: number;
    phone?: string;
    password: string;
    passwordConfirm: string;
}
export declare class StudentSignUpDto extends UserSignUpDto {
    studentNumber: number;
}
export declare class CoordinatorSignUpDto extends UserSignUpDto {
    departmentId: number;
}
export declare class SuperviserSignUpDto extends UserSignUpDto {
    position: string;
    companyId: number;
}
export {};
