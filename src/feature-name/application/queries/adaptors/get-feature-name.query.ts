import { GetFeatureNameQueryPort } from '../ports/get-feature-name.query.port';

/**
 * Query event for getting a Feature Name.
 * @argument {string} id - The Feature Name identifier.
 * @implements {GetFeatureNameQueryPort}
 * @class
 */
export class GetFeatureNameQuery implements GetFeatureNameQueryPort {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}
