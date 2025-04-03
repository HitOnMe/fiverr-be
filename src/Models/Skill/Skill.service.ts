import { Injectable, Controller, Get, Inject, Req } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSkillDTO, UpdateUserSkill } from './Skill.validate';
import { CreateuserDTO } from '../user/user.validate';
@Injectable()
export class SKillService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.skill.findMany();
  }
  async addSkillType(data: CreateSkillDTO) {
    return await this.prisma.skill.create({
      data,
    });
  }
  async findSKills(id: string) {
    return await this.prisma.skill.findFirst({
      where: {
        id: +id,
      },
    });
  }
  async updateSkill(id: string, data: CreateSkillDTO) {
    return await this.prisma.skill.update({
      where: {
        id: +id,
      },
      data,
    });
  }
  async deleteSkillType(id: string) {
    return await this.prisma.skill.delete({
      where: {
        id: +id,
      },
    });
  }
  async updateSkillforUser(id: string, data: UpdateUserSkill) {
    return await this.prisma.nguoidung.update({
      where: { id: +id },
      data: {
        Skills: data.Skills,
      },
    });
  }
  async findUserHaveSkill(id: string) {
    const searchSkill = await this.prisma.skill.findFirst({
      where: {
        id: +id,
      },
    });
    return await this.prisma.nguoidung.findMany({
      where: {
        Skills: {
          contains: searchSkill?.tenSKill,
        },
      },
    });
  }
}
