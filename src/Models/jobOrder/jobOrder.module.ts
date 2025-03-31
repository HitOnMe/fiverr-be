import { Module } from '@nestjs/common';
import { UserController } from './jobOrder.controller';
import { JobTypeService } from './jobOrder.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtStrategy } from '../../constanst/jwt.passport';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [JobTypeService, PrismaService, JwtStrategy],
})
export default class jobOrderModule {}
