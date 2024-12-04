# Base layer
FROM node:22 as base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm

# Development run  layer
FROM base as development
WORKDIR /app

COPY . .
RUN pnpm install
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start:dev"]

# Builder layer
FROM base as builder
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm build

# Production run layer
FROM node:22-slim as production
WORKDIR /usr/src
COPY --from=builder ./node_modules ./node_modules
COPY --from=builder ./dist ./dist
COPY --from=builder ./package.json ./package.json
RUN apt-get update -y && apt-get install -y openssl
USER node
CMD node dist/main
