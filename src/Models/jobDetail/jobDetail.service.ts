import { Injectable, Controller, Get, Inject, Req } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJobDetailDTO } from './jobDetail.validate';
@Injectable()
export class JobTypeService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.chiTietLoaiCongViec.findMany();
  }
  async addJobDetailType(data: CreateJobDetailDTO) {
    return await this.prisma.chiTietLoaiCongViec.create({
      data,
    });
  }
  async findOne(id: string) {
    return await this.prisma.chiTietLoaiCongViec.findFirst({
      where: {
        id: +id,
      },
    });
  }
  async update(id: string, data: CreateJobDetailDTO) {
    await this.prisma.chiTietLoaiCongViec.update({
      where: {
        id: +id,
      },
      data,
    });
  }
  async delete(id: string) {
    await this.prisma.chiTietLoaiCongViec.delete({
      where: {
        id: +id,
      },
    });
  }
}
