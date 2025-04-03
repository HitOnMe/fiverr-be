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
  async updateImage(id: string, data: CreateJobDTO, file: string) {
    return await this.prisma.congviec.update({
      where: {
        id: +id,
      },
      data: {
        ...data,
        hinh_anh: file,
      },
    });
  }
  async GetJobByType() {
    return await this.prisma.congviec.findMany({
      include: {
        dsNhomChiTietLoai: true,
      },
    });
  }
  async GetJobByTypeId(id: string) {
    return await this.prisma.congviec.findMany({
      where: {
        ma_loai_cong_viec: +id,
      },
    });
  }
  async GetJobByDetail(id: string) {
    return await this.prisma.congviec.findMany({
      where: {
        ma_chi_tiet_loai: +id,
      },
    });
  }
  async paginate(pageSize: string, pageIndex: string) {
    return await this.prisma.congviec.findMany({
      skip: +pageSize * (+pageIndex - 1),
      take: +pageSize,
    });
  }
  async getJobDetail(id: string) {
    return await this.prisma.congviec.findMany({
      where: {
        id: +id,
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        dsNhomChiTietLoai: {
          select: {
            ten_loai_cong_viec: true,
          },
        },
        jobType: {
          select: {
            ten_chi_tiet: true,
          },
        },
      },
    });
  }
  async getJobByName(name: string) {
    return await this.prisma.congviec.findMany({
      where: {
        ten_cong_viec: name,
      },
      include: {
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
        dsNhomChiTietLoai: {
          select: {
            ten_loai_cong_viec: true,
          },
        },
        jobType: {
          select: {
            ten_chi_tiet: true,
          },
        },
      },
    });
  }
}
