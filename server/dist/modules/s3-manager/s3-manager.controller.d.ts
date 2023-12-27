import { S3ManagerService } from './s3-manager.service';
import { File } from '../../common/interfaces/file.interface';
import { DeleteObject } from './dto/delete-object.dto';
export declare class S3ManagerController {
    private readonly s3;
    constructor(s3: S3ManagerService);
    listBuckets(): Promise<any>;
    listObjects(bucketName: string): Promise<any>;
    uploadFile(bucketName: string, file: File): Promise<any>;
    deleteObject(bucketName: string, body: DeleteObject): Promise<void>;
}
