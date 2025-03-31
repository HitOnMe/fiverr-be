import { Injectable, Controller, Get, Inject, Req } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateuserDTO } from './user.validate';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.nguoiDung.findMany();
  }
  async addUser(userData: CreateuserDTO) {
    return await this.prisma.nguoiDung.create({
      data: userData,
    });
  }
  async findUserById(id: string) {
    return await this.prisma.nguoiDung.findFirst({
      where: {
        id: +id,
      },
    });
  }
  async updateUser(id: string, data: CreateuserDTO) {
    return await this.prisma.nguoiDung.update({
      where: {
        id: +id,
      },
      data,
    });
  }
  async deleteUser(id: string) {
    return await this.prisma.nguoiDung.delete({
      where: {
        id: +id,
      },
    });
  }
  async SearchUserByName(name: string) {
    return await this.prisma.nguoiDung.findFirst({
      where: {
        name: name,
      },
    });
  }
}
