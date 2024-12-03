import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform, TransformFnParams } from 'class-transformer';
import { IsOptional, IsUUID } from 'class-validator';

export class ListFeatureNameQueryRequest {
  @IsUUID(3, { each: true })
  @IsOptional()
  @ApiProperty()
  @Expose()
  @Transform(({ value }: TransformFnParams) => (value ? value.split(',') : []))
  ids: string[];
}
