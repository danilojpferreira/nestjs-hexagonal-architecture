import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { FeatureName } from '../../../domain/entities/adaptors/feature-name.entity';
import { FeatureNameService } from '../../../domain/services/adaptors/feature-name.service';
import { GetFeatureNameResponse } from '../../controllers/responses/get-feature-name.response';
import { GetFeatureNameQuery } from '../adaptors/get-feature-name.query';

@QueryHandler(GetFeatureNameQuery)
export class GetFeatureNameQueryHandler
  implements IQueryHandler<GetFeatureNameQuery, GetFeatureNameResponse>
{
  constructor(private readonly service: FeatureNameService) {}

  async execute({ id }: GetFeatureNameQuery): Promise<GetFeatureNameResponse> {
    const featureName: FeatureName = await this.service.find(id);
    return new GetFeatureNameResponse(featureName);
  }
}
