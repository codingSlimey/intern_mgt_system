import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class CustomMatchPasswords implements ValidatorConstraintInterface {
    defaultMessage(validationArguments?: ValidationArguments): string;
    validate(password: string, validationArguments?: ValidationArguments): boolean | Promise<boolean>;
}
