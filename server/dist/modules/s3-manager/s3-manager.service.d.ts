import * as AWS from 'aws-sdk';
import { File } from '../../common/interfaces/file.interface';
export declare class S3ManagerService {
    private s3;
    constructor();
    listBuckets(): Promise<AWS.S3.Buckets>;
    listObjects(bucket: string): Promise<any>;
    uploadFile(bucket: string, file: File): Promise<{
        key: string;
    }>;
    deleteFile(bucket: string, fileName: string): Promise<void>;
    createUniqueFileKey(fileOriginalName: string): Promise<string>;
}
