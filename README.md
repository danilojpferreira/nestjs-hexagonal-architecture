# NestJS Hexagonal Architecture

This repository is a sample of a Hexagonal Architecture implementation using NestJS, inspired by this [article](https://www.linkedin.com/pulse/hexagonal-architecture-how-prevent-technical-debts-danilo-pereira-czbff/).

A Hexagonal Architecture is a software architecture that aims to create loosely coupled application. This architecture is also known as Ports and Adapters.

- This project implements [Hexagonal Architecture](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software))
- This project was developed on top of the principles of [Domain-Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design).
- This project use [CQRS pattern](https://en.wikipedia.org/wiki/Command_Query_Responsibility_Segregation)
- This project includes a [unit test sample](./src/feature-name/domain/services/adaptors/feature-name.service.spec.ts)
- This project includes a [e2e test sample](./test/feature-name.e2e-spec.ts)

## Installation

- Clone the repository
- Run `pnpm install` [How to use pnpm](https://pnpm.io/)
- Run `pnpm build`
- Run `pnpm start`

## Project architecture

Inside the `src` folder, you will find the following files:

- [main.ts](./src/main.ts) and [app.module.ts](./src/app.module.ts), responsible for starting the application.
- [metadata.ts](./src/metadata.ts) and [generate-metadata.ts](./src/generate-metadata.ts) responsible for the application metadata (used by swagger).

As well, you will find a folder `feature-name` representing an example of feature (named as `FeatureName`). Inside this folder, you will find the following subfolders, that represent the 3 architecture layers:

- **Application**: This layer is responsible for coordinating the application flow.
  - **Controllers**: This folder contains the controllers. They are responsible for receiving the requests and returning the responses.
  - **Commands**: This folder contains the commands. They are responsible for writing data using the services (on domain layer).
  - **Queries**: This folder contains the queries. They are responsible for retrieving the data from the services (on domain layer).
- **Domain**: This layer contains the business logic.
  - **Entities**: This folder contains the entities (Aggregate roots). They are responsible for representing the business objects.
  - **Services**: This folder contains the services. They are responsible for the business logic under the entities, as well for the communication with the repositories.
- **Infrastructure**: This layer is responsible for the communication with the external world.
  - **Repositories**: This folder contains the repositories. They are responsible for the data store and query.

Under each of the nested folders, you will find ports and adapters. The ports are the interfaces that the adapters must implement. The adapters are the implementations of the ports.
