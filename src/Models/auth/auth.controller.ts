import { Body, Controller, Post } from '@nestjs/common';
import { CreateuserDTO, loginUserDTO } from './ath.validate';
import { responseSuccess } from '../../common/response.js';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { BadRequestException } from '../../helper/error.helper';
@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private readonly userService: AuthService) {}
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
}
