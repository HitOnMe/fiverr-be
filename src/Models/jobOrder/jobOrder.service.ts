import { Injectable, Controller, Get, Inject, Req } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJobOrderDTO } from './jobOrder.validate';
@Injectable()
export class JobTypeService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.thuecongviec.findMany();
  }
  async addJobOrder(data: CreateJobOrderDTO) {
    return await this.prisma.thuecongviec.create({
      data,
    });
  }
  async findJobType(id: string) {
    return await this.prisma.thuecongviec.findFirst({
      where: {
        id: +id,
      },
    });
  }
  async updateJobType(id: string, data: CreateJobOrderDTO) {
    return await this.prisma.thuecongviec.update({
      where: {
        id: +id,
      },
      data,
    });
  }
  async deleteJobType(id: string) {
    return await this.prisma.thuecongviec.delete({
      where: {
        id: +id,
      },
    });
  }
  async getJobList(id: string) {
    return await this.prisma.thuecongviec.findMany({
      where: {
        ma_nguoi_thue: +id,
      },
    });
  }
  async checkJobDone(userId: string, jobId: string) {
    return await this.prisma.thuecongviec.findFirst({
      where: {
        ma_nguoi_thue: +userId,
        id: +jobId,
        hoan_thanh: true,
      },
    });
  }
  async paginate(pageSize: string, pageIndex: string) {
    return await this.prisma.thuecongviec.findMany({
      skip: +pageSize * (+pageIndex - 1),
      take: +pageSize,
    });
  }
}
