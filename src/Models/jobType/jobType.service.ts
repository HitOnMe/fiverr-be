import { Injectable, Controller, Get, Inject, Req } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJobTypeDTO } from './jobType.validate';
@Injectable()
export class JobTypeService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.loaiCongViec.findMany();
  }
  async addJobType(data: CreateJobTypeDTO) {
    return await this.prisma.loaiCongViec.create({
      data,
    });
  }
  async findJobType(id: string) {
    return await this.prisma.loaiCongViec.findFirst({
      where: {
        id: +id,
      },
    });
  }
  async updateJobType(id: string, data: CreateJobTypeDTO) {
    return await this.prisma.loaiCongViec.update({
      where: {
        id: +id,
      },
      data,
    });
  }
  async deleteJobType(id: string) {
    return await this.prisma.loaiCongViec.delete({
      where: {
        id: +id,
      },
    });
  }
}
