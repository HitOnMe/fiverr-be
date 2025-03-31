import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsInt,
  IsDateString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateuserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  age: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pass_word: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  phone: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  birth_day: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  role: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  certification: string;
}
export class loginUserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pass_word: string;
}
