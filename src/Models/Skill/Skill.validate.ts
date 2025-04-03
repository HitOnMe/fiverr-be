import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateSkillDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  tenSKill: string;
}
export class UpdateUserSkill {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Skills: string;
}
