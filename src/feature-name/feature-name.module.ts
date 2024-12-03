import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CommandHandlers } from './application/commands';
import { FeatureNameController } from './application/controllers/feature-name.controller';
import { QueryHandlers } from './application/queries';
import { Services } from './domain/services';
import { Repositories } from './infrastructure/repositories';

@Module({
  imports: [CqrsModule],
  controllers: [FeatureNameController],
  providers: [
    ...CommandHandlers,
    ...QueryHandlers,
    ...Services,
    ...Repositories,
  ],
})
export class FeatureNameModule {}
