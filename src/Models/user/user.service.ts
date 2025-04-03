import { Injectable, Controller, Get, Inject, Req } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateuserDTO } from './user.validate';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.nguoidung.findMany();
  }
  async addUser(userData: CreateuserDTO) {
    return await this.prisma.nguoidung.create({
      data: userData,
    });
  }
  async findUserById(id: string) {
    return await this.prisma.nguoidung.findFirst({
      where: {
        id: +id,
      },
    });
  }
  async updateUser(id: string, data: CreateuserDTO) {
    return await this.prisma.nguoidung.update({
      where: {
        id: +id,
      },
      data,
    });
  }
  async deleteUser(id: string) {
    return await this.prisma.nguoidung.delete({
      where: {
        id: +id,
      },
    });
  }
  async SearchUserByName(name: string) {
    return await this.prisma.nguoidung.findFirst({
      where: {
        name: name,
      },
    });
  }
  async paginate(pageSize: string, pageIndex: string) {
    return await this.prisma.nguoidung.findMany({
      skip: +pageSize * (+pageIndex - 1),
      take: +pageSize,
    });
  }
}
