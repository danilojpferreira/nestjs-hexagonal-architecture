import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { FeatureName } from '../../../domain/entities/adaptors/feature-name.entity';
import { FeatureNameService } from '../../../domain/services/adaptors/feature-name.service';
import { ListFeatureNameResponse } from '../../controllers/responses/list-feature-name.response';
import { ListFeatureNameQuery } from '../adaptors/list-feature-name.query';

@QueryHandler(ListFeatureNameQuery)
export class ListFeatureNameQueryHandler
  implements IQueryHandler<ListFeatureNameQuery, ListFeatureNameResponse>
{
  constructor(private readonly service: FeatureNameService) {}

  async execute({
    ids,
  }: ListFeatureNameQuery): Promise<ListFeatureNameResponse> {
    const featureNames: FeatureName[] = await this.service.findMany(ids);
    return new ListFeatureNameResponse(featureNames);
  }
}
