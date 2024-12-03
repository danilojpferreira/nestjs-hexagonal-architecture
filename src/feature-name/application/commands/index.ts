import { CommandHandlerType } from '@nestjs/cqrs';

import { CreateFeatureNameCommandHandler } from './handlers/create-feature-name.command.handler';
import { UpdateFeatureNameCommandHandler } from './handlers/update-feature-name.command.handler';

export const CommandHandlers: CommandHandlerType[] = [
  CreateFeatureNameCommandHandler,
  UpdateFeatureNameCommandHandler,
];
