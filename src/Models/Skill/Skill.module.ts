import { Module } from '@nestjs/common';
import { SkillController } from './SKill.controller';
import { SKillService } from './Skill.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { UploadService } from 'src/uploadFile/upload.congviec';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [SkillController],
  providers: [SKillService, PrismaService, UploadService],
})
export default class SKillModule {}
