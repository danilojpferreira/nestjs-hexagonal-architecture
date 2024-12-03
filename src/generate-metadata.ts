import { PluginMetadataGenerator } from '@nestjs/cli/lib/compiler/plugins/plugin-metadata-generator';
import { ReadonlyVisitor } from '@nestjs/swagger/dist/plugin';

export const generateMetadata = (): void => {
  const generator: PluginMetadataGenerator = new PluginMetadataGenerator();
  generator.generate({
    visitors: [
      new ReadonlyVisitor({
        introspectComments: true,
        dtoFileNameSuffix: ['.request', '.response'],
        pathToSource: __dirname,
      }),
    ],
    outputDir: __dirname,
    watch: false,
    tsconfigPath: './tsconfig.build.json',
  });
};

generateMetadata();
