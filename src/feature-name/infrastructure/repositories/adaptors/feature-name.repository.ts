import { faker } from '@faker-js/faker';
import { Injectable, Logger } from '@nestjs/common';

import { FeatureName } from '../../../domain/entities/adaptors/feature-name.entity';
import { FeatureNameRepositoryPort } from '../ports/feature-name.repository.port';

@Injectable()
export class FeatureNameRepository implements FeatureNameRepositoryPort {
  readonly #logger: Logger = new Logger(FeatureNameRepository.name);

  async create(input: FeatureName): Promise<FeatureName> {
    this.#logger.error(`Create (${input.id}): Method not implemented.`);
    return input;
  }

  async update(input: FeatureName): Promise<FeatureName> {
    this.#logger.error(`Update (${input.id}): Method not implemented.`);
    return input;
  }

  async delete(id: string): Promise<void> {
    this.#logger.error(`Delete (${id}): Method not implemented.`);
  }

  async find(id: string): Promise<FeatureName> {
    this.#logger.error(`Find (${id}): Method not implemented.`);
    return new FeatureName({ id, name: faker.string.alpha(5) });
  }

  async findMany(ids?: string[]): Promise<FeatureName[]> {
    this.#logger.error(`FindMany ${ids}: Method not implemented.`);
    return (
      ids?.map(
        (id: string) => new FeatureName({ id, name: faker.string.alpha(5) }),
      ) || []
    );
  }
}
