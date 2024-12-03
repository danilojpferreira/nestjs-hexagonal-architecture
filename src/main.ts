import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { env } from 'node:process';

import { AppModule } from './app.module';
import metadata from './metadata';

async function bootstrap(): Promise<void> {
  const app: INestApplication = await NestFactory.create(AppModule);

  const config: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
    .setVersion('0.1')
    .build();

  await SwaggerModule.loadPluginMetadata(metadata);
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Add auto-validation. Ref: https://docs.nestjs.com/techniques/validation#auto-validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.enableShutdownHooks();

  await app.init();
  await app.listen(env.PORT || 3000);
}
bootstrap();
