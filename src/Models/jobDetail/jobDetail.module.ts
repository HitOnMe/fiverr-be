import { Module } from '@nestjs/common';
import { JobDetailController } from './jobDetail.controller';
import { JobTypeService } from './jobDetail.service';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  imports: [],
  controllers: [JobDetailController],
  providers: [JobTypeService, PrismaService],
})
export default class JobDetailModule {}
