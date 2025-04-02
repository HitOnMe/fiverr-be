import { Module } from '@nestjs/common';
import { UploadService } from './upload.congviec';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [UploadService],
  exports: [UploadService],
})
export default class jobUploadModule {}
