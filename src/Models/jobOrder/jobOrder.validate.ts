import {
  IsNotEmpty,
  IsInt,
  IsDate,
  IsBoolean,
  IsISO8601,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateJobOrderDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  ma_cong_viec: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  ma_nguoi_thue: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsISO8601()
  ngay_thue: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  hoan_thanh: boolean;
}
