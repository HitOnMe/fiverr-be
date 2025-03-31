import { IsNotEmpty, IsString, IsInt, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCmtDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  ma_cong_viec: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  ma_nguoi_binh_luan: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  ngay_binh_luan: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  noi_dung: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  sao_binh_luan: number;
}
