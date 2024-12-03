import { UpdateFeatureNameCommandPort } from '../ports/update-feature-name.command.port';

/**
 * Command event for update Feature Name.
 * @implements {UpdateFeatureNameCommandPort}
 * @class
 */
export class UpdateFeatureNameCommand implements UpdateFeatureNameCommandPort {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;

  constructor({ id, name, description }: UpdateFeatureNameCommandPort) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
