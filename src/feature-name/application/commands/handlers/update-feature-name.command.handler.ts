import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';

import { FeatureName } from '../../../domain/entities/adaptors/feature-name.entity';
import { FeatureNameService } from '../../../domain/services/adaptors/feature-name.service';
import { UpdateFeatureNameResponse } from '../../controllers/responses/update-feature-name.response';
import { UpdateFeatureNameCommand } from '../adaptors/update-feature-name.command';

@CommandHandler(UpdateFeatureNameCommand)
export class UpdateFeatureNameCommandHandler
  implements
    ICommandHandler<UpdateFeatureNameCommand, UpdateFeatureNameResponse>
{
  constructor(private readonly service: FeatureNameService) {}

  async execute({
    id,
    name,
    description,
  }: UpdateFeatureNameCommand): Promise<UpdateFeatureNameResponse> {
    const featureName: FeatureName = await this.service.update(id, {
      name,
      description,
    });
    return new UpdateFeatureNameResponse(featureName);
  }
}
