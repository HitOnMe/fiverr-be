import { IsEmail, IsNotEmpty, IsString, IsInt, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateJobDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  ten_cong_viec: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  danh_gia: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  gia_tien: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  hinh_anh: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  mo_ta: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  mo_ta_ngan: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  sao_cong_viec: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  ma_chi_tiet_loai: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  nguoi_tao: number;
}
