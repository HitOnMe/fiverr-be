import { CommentService } from './cmt.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CreateCmtDTO } from './cmt.validate';
import { responseSuccess, responseError } from '../../common/response.js';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { BadRequestException } from '../../helper/error.helper';
import { AuthGuard } from '../../guards/auth/auth.gards';

@ApiTags('Binh-luan')
@ApiBearerAuth('access-token')
@UseGuards(AuthGuard)
@Controller()
export class UserController {
  constructor(private readonly CommentService: CommentService) {}

  @Get('/Binh-luan')
  async getAllUser() {
    try {
      const data = await this.CommentService.findAll();
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }

  @Post('/Binh-luan')
  async addCmt(@Body() userData: CreateCmtDTO) {
    try {
      const data = await this.CommentService.addCmt(userData);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Get('/Binh-luan/:id')
  async getCmtById(@Param('id') id: string) {
    try {
      const data = await this.CommentService.getCmtById(id);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Put('/Binh-luan/:id')
  async updateCmt(@Param('id') id: string, @Body() userData: CreateCmtDTO) {
    try {
      const data = await this.CommentService.updateCmt(id, userData);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Delete('/Binh-luan/:id')
  async deleteCmt(@Param('id') id: string) {
    try {
      const data = await this.CommentService.deleteCmt(id);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Get('/Binh-luan/lay-binh-luan-theo-cong-viec/:MaCongViec')
  async getCmtByJob(@Param('MaCongViec') id: string) {
    try {
      const data = await this.CommentService.getCmtByJob(id);
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
}
