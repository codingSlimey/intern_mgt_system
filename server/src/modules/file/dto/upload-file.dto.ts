import { IsString, MaxLength } from 'class-validator';

export class UploadFileDto {
  @IsString()
  @MaxLength(30, { message: "You have exceeded the maximum length for title" })
  title: string;

  file: any;
}