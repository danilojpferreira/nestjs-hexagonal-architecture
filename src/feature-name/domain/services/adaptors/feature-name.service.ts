import { Injectable } from '@nestjs/common';

import { FeatureNameRepository } from '../../../infrastructure/repositories/adaptors/feature-name.repository';
import { FeatureName } from '../../entities/adaptors/feature-name.entity';
import {
  FeatureNameServicePort,
  FeatureNameServicePortCreate,
  FeatureNameServicePortUpdate,
} from '../ports/feature-name.service.port';

@Injectable()
export class FeatureNameService implements FeatureNameServicePort {
  constructor(private readonly repository: FeatureNameRepository) {}
  async create({
    name,
    description,
  }: FeatureNameServicePortCreate): Promise<FeatureName> {
    const featureName: FeatureName = new FeatureName({ name, description });
    const createdFeatureName: FeatureName =
      await this.repository.create(featureName);
    return createdFeatureName;
  }

  async update(
    id: string,
    { name, description }: FeatureNameServicePortUpdate,
  ): Promise<FeatureName> {
    const featureName: FeatureName = await this.repository.find(id);

    featureName.name = name;
    featureName.description = description;

    const updatedFeatureName: FeatureName =
      await this.repository.update(featureName);
    return updatedFeatureName;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
    return;
  }
  async find(id: string): Promise<FeatureName> {
    const foundFeatureName: FeatureName = await this.repository.find(id);
    return foundFeatureName;
  }
  async findMany(ids?: string[]): Promise<FeatureName[]> {
    const foundFeatureNames: FeatureName[] =
      await this.repository.findMany(ids);
    return foundFeatureNames;
  }
}
