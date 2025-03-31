import { Injectable, Controller, Get, Inject, Req } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJobDTO } from './job.validate';
@Injectable()
export class JobService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.congviec.findMany();
  }
  async findOne(id: string) {
    return await this.prisma.congviec.findFirst({
      where: {
        id: +id,
      },
    });
  }
  async addJob(data: CreateJobDTO) {
    return await this.prisma.congviec.create({
      data,
    });
  }
  async deleteJob(id: string) {
    return await this.prisma.congviec.delete({
      where: {
        id: +id,
      },
    });
  }
  async updateJob(id: string, data: CreateJobDTO) {
    return await this.prisma.congviec.update({
      where: {
        id: +id,
      },
      data,
    });
  }
}
