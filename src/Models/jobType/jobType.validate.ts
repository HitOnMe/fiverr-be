import { IsEmail, IsNotEmpty, IsString, IsInt, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateJobTypeDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  ten_loai_cong_viec: string;
}
