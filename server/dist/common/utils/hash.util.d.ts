export declare class Hash {
    static hash(code: string): Promise<string>;
    static compare(password: string, hash: string): Promise<any>;
}
