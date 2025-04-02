import { Module } from '@nestjs/common';
import { JobDetailController } from './jobDetail.controller';
import { JobDetailService } from './jobDetail.service';
import { PrismaService } from 'src/prisma/prisma.service';
import jobUploadModule from 'src/uploadFile/upload.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [jobUploadModule, ConfigModule.forRoot()],
  controllers: [JobDetailController],
  providers: [JobDetailService, PrismaService],
})
export default class JobDetailModule {}
