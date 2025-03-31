import { IsEmail, IsNotEmpty, IsString, IsInt, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateJobDetailDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  ten_chi_tiet: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  hinh_anh: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  ma_loai_cong_viec: number;
}
