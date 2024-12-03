import { Module } from '@nestjs/common';

import { FeatureNameModule } from './feature-name/feature-name.module';

@Module({
  imports: [FeatureNameModule],
})
export class AppModule {}
