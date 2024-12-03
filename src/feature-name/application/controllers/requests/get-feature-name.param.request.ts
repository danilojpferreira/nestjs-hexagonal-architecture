import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class GetFeatureNameParamRequest {
  @IsUUID()
  @ApiProperty()
  id: string;
}
