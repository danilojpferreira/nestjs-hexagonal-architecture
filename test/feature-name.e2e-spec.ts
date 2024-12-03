import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from '../src/app.module';

describe('E2E: Feature Name', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should request a creation via [POST /feature-name]', () => {
    return request(app.getHttpServer())
      .post('/feature-name')
      .send({
        name: 'Feature Name',
        description: 'Feature Description',
      })
      .expect(201)
      .then(
        (response: {
          body: {
            id: string;
            name: string;
            description: string;
            createdAt: string;
            updatedAt: string;
          };
        }) => {
          expect(response.body.id).toBeDefined();
          expect(response.body.name).toBe('Feature Name');
          expect(response.body.description).toBe('Feature Description');
          expect(response.body.createdAt).toBeDefined();
          expect(response.body.updatedAt).toBeDefined();
        },
      );
  });
});
