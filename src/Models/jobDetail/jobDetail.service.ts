import { Injectable, Controller, Get, Inject, Req } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJobDetailDTO } from './jobDetail.validate';
@Injectable()
export class JobDetailService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.chitietloaicongviec.findMany();
  }
  async addJobDetailType(data: CreateJobDetailDTO) {
    return await this.prisma.chitietloaicongviec.create({
      data,
    });
  }
  async findOne(id: string) {
    return await this.prisma.chitietloaicongviec.findFirst({
      where: {
        id: +id,
      },
    });
  }
  async update(id: string, data: CreateJobDetailDTO) {
    await this.prisma.chitietloaicongviec.update({
      where: {
        id: +id,
      },
      data,
    });
  }
  async delete(id: string) {
    await this.prisma.chitietloaicongviec.delete({
      where: {
        id: +id,
      },
    });
  }
  async updateImage(id: string, data: CreateJobDetailDTO, file: string) {
    return await this.prisma.chitietloaicongviec.update({
      where: {
        id: +id,
      },
      data: {
        ...data,
        hinh_anh: file,
      },
    });
  }
}
