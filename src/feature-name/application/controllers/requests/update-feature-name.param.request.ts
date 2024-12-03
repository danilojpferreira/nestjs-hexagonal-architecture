import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class UpdateFeatureNameParamRequest {
  @IsUUID()
  @ApiProperty()
  id: string;
}
