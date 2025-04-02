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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { CreateJobDTO } from './job.validate';
import { responseSuccess, responseError } from '../../common/response.js';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiBody,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth/auth.gards';
import { BadRequestException } from '../../helper/error.helper';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/uploadFile/upload.congviec';
@ApiTags('CongViec')
@ApiBearerAuth('access-token')
@UseGuards(AuthGuard)
@Controller()
export class JobController {
  constructor(
    private readonly JobService: JobService,
    private uploadService: UploadService,
  ) {}

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
  @Post('upload-hinh-cong-viec/:MaCongViec')
  @ApiConsumes('multipart/form-data')
  @ApiParam({ name: 'MaCongViec', required: true, type: Number }) // Định dạng param trong path
  @ApiBody({
    description: 'Upload hình ảnh công việc',
    required: true,
    schema: {
      type: 'object',
      properties: {
        formFile: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('formFile'))
  async uploadToS3(
    @UploadedFile() file: Express.Multer.File,
    @Param('MaCongViec') id: string,
    data: CreateJobDTO,
  ) {
    const fileUpload = await this.uploadService.uploadFile(file);
    return await this.JobService.updateImage(id, data, fileUpload);
  }
}
