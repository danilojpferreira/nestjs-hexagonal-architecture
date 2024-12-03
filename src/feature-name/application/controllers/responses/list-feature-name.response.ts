import { ApiProperty } from '@nestjs/swagger';

interface ListFeatureNameResponseData {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export class ListFeatureNameResponse {
  @ApiProperty()
  data: {
    id: string;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
  @ApiProperty()
  total: number;

  constructor(featureNames: ListFeatureNameResponseData[]) {
    this.data = featureNames.map(
      (featureName: ListFeatureNameResponseData) => ({
        id: featureName.id,
        name: featureName.name,
        description: featureName.description,
        createdAt: featureName.createdAt,
        updatedAt: featureName.updatedAt,
      }),
    );

    this.total = featureNames.length;
  }
}
