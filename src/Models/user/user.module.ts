import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { RolesGuard } from 'src/guards/role/role.guards';
import { JwtStrategy } from '../../constanst/jwt.passport';
import { APP_GUARD } from '@nestjs/core';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard, //authentication
    },
    JwtStrategy, //decode jwt
  ],
})
export default class UserModule {}
