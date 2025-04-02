import { JobDetailService } from './jobDetail.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { CreateJobDetailDTO } from './jobDetail.validate';
import { UploadService } from 'src/uploadFile/upload.congviec';
import { responseSuccess, responseError } from '../../common/response.js';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiBody,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth/auth.gards';
import { FileInterceptor } from '@nestjs/platform-express';
import { BadRequestException } from '../../helper/error.helper';
@ApiTags('ChiTietLoaiCongViec')
@ApiBearerAuth('access-token')
@UseGuards(AuthGuard)
@Controller()
export class JobDetailController {
  constructor(
    private readonly JobDetailService: JobDetailService,
    private uploadService: UploadService,
  ) {}

  @Get('/chi-tiet-loai-cong-viec')
  async getAllUser() {
    try {
      const data = await this.JobDetailService.findAll();
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }

  @Post('/chi-tiet-loai-cong-viec')
  async addUser(@Body() userData: CreateJobDetailDTO) {
    try {
      const data = await this.JobDetailService.addJobDetailType(userData);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Get('/chi-tiet-loai-cong-viec/:id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.JobDetailService.findOne(id);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Delete('/chi-tiet-loai-cong-viec/:id')
  async delete(@Param('id') id: string) {
    try {
      const data = await this.JobDetailService.delete(id);
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
      const data = await this.JobDetailService.update(id, userData);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Post('upload-hinh-nhom-loai-cong-viec/:MaNhomLoaiCongViec')
  @ApiConsumes('multipart/form-data')
  @ApiParam({ name: 'MaNhomLoaiCongViec', required: true, type: Number }) // Định dạng param trong path
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
    @Param('MaNhomLoaiCongViec') id: string,
    data: CreateJobDetailDTO,
  ) {
    const fileUpload = await this.uploadService.uploadFile(file);
    return await this.JobDetailService.updateImage(id, data, fileUpload);
  }
}
