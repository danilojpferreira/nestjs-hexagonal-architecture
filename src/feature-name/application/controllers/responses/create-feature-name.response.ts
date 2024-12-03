import { ApiProperty } from '@nestjs/swagger';

interface CreateFeatureNameResponseData {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export class CreateFeatureNameResponse {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;

  constructor(featureName: CreateFeatureNameResponseData) {
    this.id = featureName.id;
    this.name = featureName.name;
    this.description = featureName.description;
    this.createdAt = featureName.createdAt;
    this.updatedAt = featureName.updatedAt;
  }
}
