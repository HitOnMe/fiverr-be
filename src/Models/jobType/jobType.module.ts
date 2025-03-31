import { Module } from '@nestjs/common';
import { UserController } from './jobType.controller';
import { JobTypeService } from './jobType.service';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [JobTypeService, PrismaService],
})
export default class JobTypeModule {}
