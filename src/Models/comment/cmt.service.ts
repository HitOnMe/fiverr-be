import { Injectable, Controller, Get, Inject, Req } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCmtDTO } from './cmt.validate';
@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.binhluan.findMany();
  }
  async addCmt(data: CreateCmtDTO) {
    return await this.prisma.binhluan.create({
      data,
    });
  }
  async getCmtById(id: string) {
    return await this.prisma.binhluan.findFirst({
      where: {
        id: +id,
      },
    });
  }
  async updateCmt(id: string, data: CreateCmtDTO) {
    return await this.prisma.binhluan.update({
      where: {
        id: +id,
      },
      data,
    });
  }
  async deleteCmt(id: string) {
    return await this.prisma.binhluan.delete({
      where: {
        id: +id,
      },
    });
  }
  async getCmtByJob(id: string) {
    return await this.prisma.binhluan.findFirst({
      where: {
        ma_cong_viec: +id,
      },
      include: {
        job: true,
      },
    });
  }
}
