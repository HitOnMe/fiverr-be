import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from 'src/constanst/jwt.constants';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateuserDTO } from './ath.validate';
import { BadRequestException } from 'src/helper/error.helper';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async addUser(userData: CreateuserDTO) {
    const user = await this.prisma.nguoidung.findFirst({
      where: {
        email: userData.email,
      },
    });
    if (user) {
      throw new BadRequestException(400, 'user has already existed!');
    }
    const salt = jwtConstants.SALT_BCRYPT;
    const hash = await bcrypt.hash(userData?.pass_word, salt ? +salt : 5);
    userData.pass_word = hash;
    return await this.prisma.nguoidung.create({
      data: userData,
    });
  }
  async loginUser(email: string, pass: string) {
    const user = await this.prisma.nguoidung.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new BadRequestException(400, 'user does not exist!');
    }
    const isPassword = await bcrypt.compare(pass, user?.pass_word);
    if (!isPassword) {
      throw new BadRequestException(401, 'Wrong email or password!');
    }

    const payload = { sub: user.id, username: user.name };
    const { pass_word, ...userResponse } = user;
    return {
      user: userResponse,
      access_Token: await this.jwtService.signAsync(payload),
    };
  }
}
