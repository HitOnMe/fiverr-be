import { SKillService } from './Skill.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth/auth.gards';
import { CreateSkillDTO, UpdateUserSkill } from './Skill.validate';
import { responseSuccess, responseError } from '../../common/response.js';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BadRequestException } from '../../helper/error.helper';
import { Roles } from 'src/guards/role/role.decorator';
import { Role } from 'src/guards/role/role.enum';
import { CreateuserDTO } from '../auth/ath.validate';
@ApiTags('Skills')
@ApiBearerAuth('access-token')
@UseGuards(AuthGuard)
@Roles(Role.Admin)
@Controller()
export class SkillController {
  constructor(private readonly SKillService: SKillService) {}

  @Get('/skills')
  async getAllUser() {
    try {
      const data = await this.SKillService.findAll();
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }
  @Get('/skills/:id')
  async getJobTypeById(@Param('id') id: string) {
    try {
      const data = await this.SKillService.findSKills(id);
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }
  @Put('/skills/:id')
  async updateSkill(@Param('id') id: string, @Body() userData: CreateSkillDTO) {
    try {
      const data = await this.SKillService.updateSkill(id, userData);
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }
  @Delete('/skills/:id')
  async deleteSkillType(@Param('id') id: string) {
    try {
      const data = await this.SKillService.deleteSkillType(id);
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }
  @Post('/skills')
  async addUser(@Body() userData: CreateSkillDTO) {
    try {
      const data = await this.SKillService.addSkillType(userData);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Put('/update-Skill/:userId')
  async updateSKill(
    @Param('userId') id: string,
    @Body() userData: UpdateUserSkill,
  ) {
    try {
      const data = await this.SKillService.updateSkillforUser(id, userData);
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }
  @Get('/find-user-by-skill/:skillId')
  async findUserHaveSkill(@Param('skillId') id: string) {
    try {
      const data = await this.SKillService.findUserHaveSkill(id);
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }
}
