import { Provider } from '@nestjs/common';

import { FeatureNameService } from './adaptors/feature-name.service';

export const Services: Provider[] = [FeatureNameService];
