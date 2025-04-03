import { JobTypeService } from './jobOrder.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  UseGuards,
  Query,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateJobOrderDTO } from './jobOrder.validate';
import { responseSuccess, responseError } from '../../common/response.js';
import { AuthGuard } from 'src/guards/auth/auth.gards';
import { BadRequestException } from '../../helper/error.helper';

@ApiTags('ThueCongViec')
@ApiBearerAuth('access-token')
@UseGuards(AuthGuard)
@Controller()
export class UserController {
  constructor(private readonly JobTypeService: JobTypeService) {}

  @Get('/thue-cong-viec')
  async getAllUser() {
    try {
      const data = await this.JobTypeService.findAll();
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }

  @Post('/thue-cong-viec')
  async addJobOrder(@Body() userData: CreateJobOrderDTO) {
    try {
      const data = await this.JobTypeService.addJobOrder(userData);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Get('/thue-cong-viec/:id')
  async getJobById(@Param('id') id: string) {
    try {
      const data = await this.JobTypeService.findJobType(id);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Put('/thue-cong-viec/:id')
  async updateJobType(
    @Param('id') id: string,
    @Body() userData: CreateJobOrderDTO,
  ) {
    try {
      const data = await this.JobTypeService.updateJobType(id, userData);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Delete('/thue-cong-viec/:id')
  async deleteJobType(@Param('id') id: string) {
    try {
      const data = await this.JobTypeService.deleteJobType(id);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Get('/lay-danh-sach-da-thue')
  async getJobOrder(@Req() req) {
    try {
      const data = await this.JobTypeService.getJobList(req.user.sub);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Get('/hoan-thanh-cong-viec/:MaThueCongViec')
  async checkJobDone(@Req() req, @Param('MaThueCongViec') id: string) {
    try {
      const data = await this.JobTypeService.checkJobDone(req.user.sub, id);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Get('/jobdetail-pagination')
  async paginate(
    @Query('pageSize') pageSize: string,
    @Query('pageIndex') pageIndex: string,
  ) {
    try {
      const data = await this.JobTypeService.paginate(pageSize, pageIndex);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
}
