import { Provider } from '@nestjs/common';

import { FeatureNameRepository } from './adaptors/feature-name.repository';

export const Repositories: Provider[] = [FeatureNameRepository];
