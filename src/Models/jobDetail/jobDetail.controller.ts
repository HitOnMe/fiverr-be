import { JobTypeService } from './jobDetail.service';
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
import { CreateJobDetailDTO } from './jobDetail.validate';
import { responseSuccess, responseError } from '../../common/response.js';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth/auth.gards';
import { BadRequestException } from '../../helper/error.helper';
@ApiTags('ChiTietLoaiCongViec')
@ApiBearerAuth('access-token')
@UseGuards(AuthGuard)
@Controller()
export class JobDetailController {
  constructor(private readonly JobTypeService: JobTypeService) {}

  @Get('/chi-tiet-loai-cong-viec')
  async getAllUser() {
    try {
      const data = await this.JobTypeService.findAll();
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }

  @Post('/chi-tiet-loai-cong-viec')
  async addUser(@Body() userData: CreateJobDetailDTO) {
    try {
      const data = await this.JobTypeService.addJobDetailType(userData);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Get('/chi-tiet-loai-cong-viec/:id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.JobTypeService.findOne(id);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Delete('/chi-tiet-loai-cong-viec/:id')
  async delete(@Param('id') id: string) {
    try {
      const data = await this.JobTypeService.delete(id);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Put('/chi-tiet-loai-cong-viec/:id')
  async updateDetail(
    @Param('id') id: string,
    @Body() userData: CreateJobDetailDTO,
  ) {
    try {
      const data = await this.JobTypeService.update(id, userData);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
}
