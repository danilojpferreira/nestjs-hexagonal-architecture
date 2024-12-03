import { faker } from '@faker-js/faker';
import { Test, TestingModule } from '@nestjs/testing';

import { FeatureNameRepository } from '../../../infrastructure/repositories/adaptors/feature-name.repository';
import { FeatureName } from '../../entities/adaptors/feature-name.entity';
import { FeatureNameService } from '../adaptors/feature-name.service';

describe('Service: FeatureNameService', () => {
  let service: FeatureNameService;
  let repository: FeatureNameRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FeatureNameService,
        {
          provide: FeatureNameRepository,
          useValue: {
            find: jest.fn(),
            findMany: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<FeatureNameService>(FeatureNameService);
    repository = module.get<FeatureNameRepository>(FeatureNameRepository);
  });

  it('should create a new FeatureName', async () => {
    // Arrange

    const repositoryCreateSpy: jest.SpyInstance = jest
      .spyOn(repository, 'create')
      .mockImplementation(async (input: FeatureName) => input);

    // Act

    const featureName: FeatureName = await service.create({
      name: 'Feature Name',
      description: 'Feature Description',
    });

    // Assert
    expect(featureName).toBeInstanceOf(FeatureName);
    expect(featureName.id).toBeDefined();
    expect(featureName.name).toBe('Feature Name');
    expect(featureName.description).toBe('Feature Description');
    expect(featureName.createdAt).toBeInstanceOf(Date);
    expect(featureName.updatedAt).toBeInstanceOf(Date);
    expect(repositoryCreateSpy).toHaveBeenCalledTimes(1);
  });

  it('should update an existing FeatureName', async () => {
    // Arrange
    const id: string = faker.string.uuid();

    const repositoryFindSpy: jest.SpyInstance = jest
      .spyOn(repository, 'find')
      .mockImplementation(
        async (id: string) => new FeatureName({ id, name: 'Feature Name' }),
      );

    const repositoryCreateSpy: jest.SpyInstance = jest
      .spyOn(repository, 'update')
      .mockImplementation(async (input: FeatureName) => input);

    // Act

    const featureName: FeatureName = await service.update(id, {
      name: 'Feature Name 2',
      description: 'Feature Description',
    });

    // Assert
    expect(featureName).toBeInstanceOf(FeatureName);
    expect(featureName.id).toBe(id);
    expect(featureName.name).toBe('Feature Name 2');
    expect(featureName.description).toBe('Feature Description');
    expect(featureName.createdAt).toBeInstanceOf(Date);
    expect(featureName.updatedAt).toBeInstanceOf(Date);
    expect(repositoryFindSpy).toHaveBeenCalledWith(id);
    expect(repositoryCreateSpy).toHaveBeenCalledTimes(1);
  });

  it('should find an existing FeatureName', async () => {
    // Arrange
    const id: string = faker.string.uuid();

    const repositoryFindSpy: jest.SpyInstance = jest
      .spyOn(repository, 'find')
      .mockImplementation(
        async (id: string) => new FeatureName({ id, name: 'Feature Name' }),
      );

    // Act

    const featureName: FeatureName = await service.find(id);

    // Assert
    expect(featureName).toBeInstanceOf(FeatureName);
    expect(featureName.id).toBe(id);
    expect(featureName.name).toBe('Feature Name');
    expect(repositoryFindSpy).toHaveBeenCalledWith(id);
  });

  it('should find many FeatureName', async () => {
    // Arrange
    const repositoryFindManySpy: jest.SpyInstance = jest
      .spyOn(repository, 'findMany')
      .mockImplementation(async () => [
        new FeatureName({ id: faker.string.uuid(), name: 'Feature Name 1' }),
        new FeatureName({ id: faker.string.uuid(), name: 'Feature Name 2' }),
      ]);

    // Act

    const featureNames: FeatureName[] = await service.findMany();

    // Assert
    expect(featureNames).toBeInstanceOf(Array);
    expect(featureNames).toHaveLength(2);
    expect(repositoryFindManySpy).toHaveBeenCalledTimes(1);
  });

  it('should delete an existing FeatureName', async () => {
    // Arrange
    const id: string = faker.string.uuid();
    const repositoryDeleteSpy: jest.SpyInstance = jest
      .spyOn(repository, 'delete')
      .mockImplementation();

    // Act
    await service.delete(id);

    // Assert
    expect(repositoryDeleteSpy).toHaveBeenCalledWith(id);
  });
});
