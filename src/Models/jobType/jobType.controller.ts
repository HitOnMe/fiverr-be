import { JobTypeService } from './jobType.service';
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
import { CreateJobTypeDTO } from './jobType.validate';
import { responseSuccess, responseError } from '../../common/response.js';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BadRequestException } from '../../helper/error.helper';
@ApiTags('LoaiCongViec')
@ApiBearerAuth('access-token')
@UseGuards(AuthGuard)
@Controller()
export class UserController {
  constructor(private readonly JobTypeService: JobTypeService) {}

  @Get('/loai-cong-viec')
  async getAllUser() {
    try {
      const data = await this.JobTypeService.findAll();
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }
  @Get('/loai-cong-viec/:id')
  async getJobTypeById(@Param('id') id: string) {
    try {
      const data = await this.JobTypeService.findJobType(id);
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }
  @Put('/loai-cong-viec/:id')
  async updateJobType(
    @Param('id') id: string,
    @Body() userData: CreateJobTypeDTO,
  ) {
    try {
      const data = await this.JobTypeService.updateJobType(id, userData);
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }
  @Delete('/loai-cong-viec/:id')
  async deleteJobType(@Param('id') id: string) {
    try {
      const data = await this.JobTypeService.deleteJobType(id);
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }
  @Post('/loai-cong-viec')
  async addUser(@Body() userData: CreateJobTypeDTO) {
    try {
      const data = await this.JobTypeService.addJobType(userData);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
}
