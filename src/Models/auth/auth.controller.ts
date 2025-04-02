import {
  Body,
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Req,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateuserDTO, loginUserDTO } from './ath.validate';
import { responseSuccess } from '../../common/response.js';

import { ApiConsumes, ApiBody, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { BadRequestException } from '../../helper/error.helper';
import { UploadService } from 'src/uploadFile/upload.congviec';
import { AuthGuard } from 'src/guards/auth/auth.gards';
@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(
    private readonly userService: AuthService,
    private uploadService: UploadService,
  ) {}
  @Post('/sign-up')
  async addUser(@Body() userData: CreateuserDTO) {
    try {
      const data = await this.userService.addUser(userData);
      const { pass_word, ...responseData } = data;
      return responseSuccess(responseData);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Post('/sign-in')
  async login(@Body() userData: loginUserDTO) {
    try {
      const data = await this.userService.loginUser(
        userData.email,
        userData.pass_word,
      );
      return responseSuccess(data);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Post('upload-avatar')
  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard)
  @ApiConsumes('multipart/form-data')
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
    @Req() req,
    data: CreateuserDTO,
  ) {
    const fileUpload = await this.uploadService.uploadFile(file);
    return await this.userService.updateImage(req.user.sub, data, fileUpload);
  }
}
