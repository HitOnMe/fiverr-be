import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { RolesGuard } from 'src/guards/role/role.guards';
import { JwtStrategy } from '../../constanst/jwt.passport';
import { APP_GUARD } from '@nestjs/core';
import jobUploadModule from 'src/uploadFile/upload.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [jobUploadModule, ConfigModule.forRoot()],
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
