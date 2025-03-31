import { Module } from '@nestjs/common';
import { UserController } from './job.controller';
import { JobService } from './job.service';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [JobService, PrismaService],
})
export default class UserModule {}
