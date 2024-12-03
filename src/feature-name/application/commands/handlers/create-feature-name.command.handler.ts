import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';

import { FeatureName } from '../../../domain/entities/adaptors/feature-name.entity';
import { FeatureNameService } from '../../../domain/services/adaptors/feature-name.service';
import { CreateFeatureNameResponse } from '../../controllers/responses/create-feature-name.response';
import { CreateFeatureNameCommand } from '../adaptors/create-feature-name.command';

@CommandHandler(CreateFeatureNameCommand)
export class CreateFeatureNameCommandHandler
  implements
    ICommandHandler<CreateFeatureNameCommand, CreateFeatureNameResponse>
{
  constructor(private readonly service: FeatureNameService) {}

  async execute({
    name,
    description,
  }: CreateFeatureNameCommand): Promise<CreateFeatureNameResponse> {
    const featureName: FeatureName = await this.service.create({
      name,
      description,
    });
    return new CreateFeatureNameResponse(featureName);
  }
}
