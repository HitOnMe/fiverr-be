import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../constanst/jwt.constants';
@Injectable()
export class UploadService {
  private s3: S3Client;
  private bucket: string;

  constructor(private configService: ConfigService) {
    this.s3 = new S3Client({
      region: jwtConstants.AWS_REGION,
      credentials: {
        accessKeyId: jwtConstants.AWS_ACCESS_KEY_ID,
        secretAccessKey: jwtConstants.AWS_SECRET_ACCESS_KEY,
      },
    });

    this.bucket = this.configService.get<string>('AWS_BUCKET_NAME')!;
  }

  async uploadFile(file: Express.Multer.File) {
    const timestamp = Date.now();
    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: `uploads/${Date.now()}_${file.originalname}`,
      Body: file.buffer,
      ACL: 'public-read',
      ContentType: file.mimetype,
    });

    await this.s3.send(command);
    return `https://${this.bucket}.s3.${this.configService.get<string>('AWS_REGION')}.amazonaws.com/uploads/${timestamp}_${file.originalname}`;
  }
}
