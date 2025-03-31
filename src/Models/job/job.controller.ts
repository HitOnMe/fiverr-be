import { JobService } from './job.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateJobDTO } from './job.validate';
import { responseSuccess, responseError } from '../../common/response.js';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth/auth.gards';
import { BadRequestException } from '../../helper/error.helper';
@ApiTags('CongViec')
@ApiBearerAuth('access-token')
@UseGuards(AuthGuard)
@Controller()
export class UserController {
  constructor(private readonly JobService: JobService) {}

  @Get('/cong-viec')
  async getAllJob() {
    try {
      const data = await this.JobService.findAll();
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }

  @Get('/cong-viec/:id')
  async getOneJob(@Param('id') id: string) {
    try {
      const data = await this.JobService.findOne(id);
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }
  @Delete('/cong-viec/:id')
  async deleteJob(@Param('id') id: string) {
    try {
      const data = await this.JobService.deleteJob(id);
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }
  @Put('/cong-viec/:id')
  async updateJob(@Param('id') id: string, @Body() userData: CreateJobDTO) {
    try {
      const data = await this.JobService.updateJob(id, userData);
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }
  @Post('/cong-viec')
  async addJob(@Body() userData: CreateJobDTO) {
    try {
      const data = await this.JobService.addJob(userData);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
}
