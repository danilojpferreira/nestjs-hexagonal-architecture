import { FeatureName } from '../../../domain/entities/adaptors/feature-name.entity';

export interface FeatureNameRepositoryPort {
  /**
   * Create and Persist a new FeatureName
   * @param {FeatureName} input
   * @returns {Promise<FeatureName>}
   */
  create(input: FeatureName): Promise<FeatureName>;

  /**
   * Update and Persist a FeatureName
   * @param {FeatureName} input
   * @returns {Promise<FeatureName>}
   */
  update(input: FeatureName): Promise<FeatureName>;

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
