import { FeatureName } from '../../entities/adaptors/feature-name.entity';

export interface FeatureNameServicePortCreate {
  name: string;
  description?: string;
}

export interface FeatureNameServicePortUpdate {
  name?: string;
  description?: string;
}

export interface FeatureNameServicePort {
  /**
   * Create a new FeatureName
   * @param {FeatureNameServicePortCreate} data
   * @returns {Promise<FeatureName>}
   */
  create(data: FeatureNameServicePortCreate): Promise<FeatureName>;

  /**
   * Update a FeatureName
   * @param {string} id
   * @param {FeatureNameServicePortUpdate} data
   * @returns {Promise<FeatureName>}
   */
  update(id: string, data: FeatureNameServicePortUpdate): Promise<FeatureName>;

  /**
   * Delete a FeatureName by ID
   * @param {string} id
   * @returns {Promise<void>}
   */
  delete(id: string): Promise<void>;

  /**
   * Find a FeatureName by ID
   * @param {string} id
   * @returns {Promise<FeatureName>}
   */
  find(id: string): Promise<FeatureName>;

  /**
   * Find many FeatureNames by IDs
   * @param {string[]} ids
   * @returns {Promise<FeatureName[]>}
   */
  findMany(ids?: string[]): Promise<FeatureName[]>;
}
