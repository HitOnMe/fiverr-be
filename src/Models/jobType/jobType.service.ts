import { Injectable, Controller, Get, Inject, Req } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJobTypeDTO } from './jobType.validate';
@Injectable()
export class JobTypeService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.loaicongviec.findMany();
  }
  async addJobType(data: CreateJobTypeDTO) {
    return await this.prisma.loaicongviec.create({
      data,
    });
  }
  async findJobType(id: string) {
    return await this.prisma.loaicongviec.findFirst({
      where: {
        id: +id,
      },
    });
  }
  async updateJobType(id: string, data: CreateJobTypeDTO) {
    return await this.prisma.loaicongviec.update({
      where: {
        id: +id,
      },
      data,
    });
  }
  async deleteJobType(id: string) {
    return await this.prisma.loaicongviec.delete({
      where: {
        id: +id,
      },
    });
  }
  async updateImage(id: string, data: CreateJobTypeDTO, file: string) {
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
  async paginate(pageSize: string, pageIndex: string) {
    return await this.prisma.chitietloaicongviec.findMany({
      skip: +pageSize * (+pageIndex - 1),
      take: +pageSize,
    });
  }
}
