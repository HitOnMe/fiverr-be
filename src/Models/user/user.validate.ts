import { IsEmail, IsNotEmpty, IsString, IsInt, IsDate } from 'class-validator';
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
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pass_word: string;

  @IsNotEmpty()
  @IsInt()
  phone: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
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
