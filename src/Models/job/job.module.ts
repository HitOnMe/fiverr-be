import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { PrismaService } from 'src/prisma/prisma.service';
import jobUploadModule from 'src/uploadFile/upload.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [jobUploadModule, ConfigModule.forRoot()],
  controllers: [JobController],
  providers: [JobService, PrismaService],
})
export default class UserModule {}
