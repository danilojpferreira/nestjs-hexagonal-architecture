import { CreateFeatureNameCommandPort } from '../ports/create-feature-name.command.port';

/**
 * Command event for create Feature Name.
 * @implements {CreateFeatureNameCommandPort}
 * @class
 */
export class CreateFeatureNameCommand implements CreateFeatureNameCommandPort {
  readonly name: string;
  readonly description?: string;

  constructor({ name, description }: CreateFeatureNameCommandPort) {
    this.name = name;
    this.description = description;
  }
}
