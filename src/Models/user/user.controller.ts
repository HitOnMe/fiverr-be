import { UserService } from './user.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CreateuserDTO } from './user.validate';
import { responseSuccess, responseError } from '../../common/response.js';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { BadRequestException } from '../../helper/error.helper';
import { AuthGuard } from 'src/guards/auth/auth.gards';
import { Role } from 'src/guards/role/role.enum';
import { Roles } from 'src/guards/role/role.decorator';
@ApiTags('user')
@ApiBearerAuth('access-token')
@UseGuards(AuthGuard)
@Roles(Role.Admin) // only admin have permission
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  async getAllUser() {
    try {
      const response = await this.userService.findAll();
      const data = response.map((user) => {
        const { pass_word, ...responseUser } = user;
        return responseUser;
      });
      return responseSuccess(data);
    } catch (error) {
      return responseError(error, 400);
    }
  }

  @Post('/users')
  async addUser(@Body() userData: CreateuserDTO) {
    try {
      const response = await this.userService.addUser(userData);
      let user = {};
      if (response) {
        const { pass_word, ...userResponse } = response;
        user = userResponse;
      }

      return responseSuccess(user);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Get('/users/:id')
  async findUserById(@Param('id') id: string) {
    try {
      const response = await this.userService.findUserById(id);
      let user = {};
      if (response) {
        const { pass_word, ...userResponse } = response;
        user = userResponse;
      }

      return responseSuccess(user);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Put('/users/:id')
  async updateUser(@Param('id') id: string, userData: CreateuserDTO) {
    try {
      const response = await this.userService.updateUser(id, userData);
      let user = {};
      if (response) {
        const { pass_word, ...userResponse } = response;
        user = userResponse;
      }

      return responseSuccess(user);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Delete('/users/:id')
  async deleteUser(@Param('id') id: string) {
    try {
      const response = await this.userService.deleteUser(id);
      let user = {};
      if (response) {
        const { pass_word, ...userResponse } = response;
        user = userResponse;
      }

      return responseSuccess(user);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
  @Get('/users/search/:TenNguoiDung')
  async SearchUserByName(@Param('TenNguoiDung') name: string) {
    try {
      const user = await this.userService.SearchUserByName(name);
      return responseSuccess(user);
    } catch (error) {
      throw new BadRequestException(400, error);
    }
  }
}
