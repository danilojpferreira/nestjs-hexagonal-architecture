import { ListFeatureNameQueryPort } from '../ports/list-feature-name.query.port';

/**
 * Query event for listing Feature Names.
 * @implements {ListFeatureNameQueryPort}
 * @class
 */
export class ListFeatureNameQuery implements ListFeatureNameQueryPort {
  readonly ids: string[];

  constructor(ids: string[] = []) {
    this.ids = ids;
  }
}
