import { Module } from '@nestjs/common';
import { UserController } from './jobType.controller';
import { JobTypeService } from './jobType.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { UploadService } from 'src/uploadFile/upload.congviec';
@Module({
  imports: [JobTypeModule, ConfigModule.forRoot()],
  controllers: [UserController],
  providers: [JobTypeService, PrismaService, UploadService],
})
export default class JobTypeModule {}
