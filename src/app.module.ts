import { Module } from '@nestjs/common';
import PrismaModule from './prisma/prisma.module';
import UserModule from './Models/user/user.module';
import CommentModule from './Models/comment/cmt.module';
import JobModule from './Models/job/job.module';
import JobTypeModule from './Models/jobType/jobType.module';
import JobDetailModule from './Models/jobDetail/jobDetail.module';
import JobOrderModule from './Models/jobOrder/jobOrder.module';
import authModule from './Models/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/role/role.guards';
@Module({
  imports: [
    PrismaModule,
    UserModule,
    CommentModule,
    JobModule,
    JobTypeModule,
    JobDetailModule,
    JobOrderModule,
    authModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
