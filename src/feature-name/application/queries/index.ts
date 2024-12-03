import { QueryHandlerType } from '@nestjs/cqrs';

import { GetFeatureNameQueryHandler } from './handlers/get-feature-name.query.handler';
import { ListFeatureNameQueryHandler } from './handlers/list-feature-name.query.handler';

export const QueryHandlers: QueryHandlerType[] = [
  GetFeatureNameQueryHandler,
  ListFeatureNameQueryHandler,
];
