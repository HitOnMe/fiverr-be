import { Injectable, Controller, Get, Inject, Req } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJobOrderDTO } from './jobOrder.validate';
@Injectable()
export class JobTypeService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.thueCongViec.findMany();
  }
  async addJobOrder(data: CreateJobOrderDTO) {
    return await this.prisma.thueCongViec.create({
      data,
    });
  }
  async findJobType(id: string) {
    return await this.prisma.thueCongViec.findFirst({
      where: {
        id: +id,
      },
    });
  }
  async updateJobType(id: string, data: CreateJobOrderDTO) {
    return await this.prisma.thueCongViec.update({
      where: {
        id: +id,
      },
      data,
    });
  }
  async deleteJobType(id: string) {
    return await this.prisma.thueCongViec.delete({
      where: {
        id: +id,
      },
    });
  }
  async getJobList(id: string) {
    return await this.prisma.thueCongViec.findMany({
      where: {
        ma_nguoi_thue: +id,
      },
    });
  }
  async checkJobDone(userId: string, jobId: string) {
    return await this.prisma.thueCongViec.findFirst({
      where: {
        ma_nguoi_thue: +userId,
        id: +jobId,
        hoan_thanh: true,
      },
    });
  }
}
