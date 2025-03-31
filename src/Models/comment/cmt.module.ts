import { Module } from '@nestjs/common';
import { UserController } from './cmt.controller';
import { CommentService } from './cmt.service';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [CommentService, PrismaService],
})
export default class CommentModule {}
