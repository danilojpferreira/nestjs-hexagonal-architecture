import { AggregateRoot, IEvent } from '@nestjs/cqrs';

import { FeatureNameEntityPort } from '../ports/feature-name.entity.port';

export class FeatureName extends AggregateRoot<IEvent> {
  readonly #id: string;
  #name: string;
  #description?: string;
  readonly #createdAt: Date;
  #updatedAt: Date;

  constructor(data: FeatureNameEntityPort) {
    super();
    const {
      id = crypto.randomUUID(),
      name,
      description,
      createdAt = new Date(),
      updatedAt = new Date(),
    }: FeatureNameEntityPort = data;
    this.#id = id;
    this.#name = name;
    this.#description = description;
    this.#createdAt = createdAt;
    this.#updatedAt = updatedAt;
  }

  get id(): string {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }

  get description(): string | undefined {
    return this.#description;
  }

  get createdAt(): Date {
    return this.#createdAt;
  }

  get updatedAt(): Date {
    return this.#updatedAt;
  }

  set name(name: string | undefined) {
    if (name) {
      this.#name = name;
      this.setUpdatedAt();
    }
  }

  set description(description: string | undefined | null) {
    if (description !== null) {
      this.#description = description;
      this.setUpdatedAt();
    }
  }

  private setUpdatedAt(): void {
    this.#updatedAt = new Date();
  }
}
