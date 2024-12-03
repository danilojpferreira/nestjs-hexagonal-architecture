import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { CreateFeatureNameCommand } from '../commands/adaptors/create-feature-name.command';
import { UpdateFeatureNameCommand } from '../commands/adaptors/update-feature-name.command';
import { GetFeatureNameQuery } from '../queries/adaptors/get-feature-name.query';
import { ListFeatureNameQuery } from '../queries/adaptors/list-feature-name.query';

import { CreateFeatureNameRequest } from './requests/create-feature-name.request';
import { GetFeatureNameParamRequest } from './requests/get-feature-name.param.request';
import { ListFeatureNameQueryRequest } from './requests/list-feature-name.query.request';
import { UpdateFeatureNameParamRequest } from './requests/update-feature-name.param.request';
import { UpdateFeatureNameRequest } from './requests/update-feature-name.request';
import { CreateFeatureNameResponse } from './responses/create-feature-name.response';
import { GetFeatureNameResponse } from './responses/get-feature-name.response';
import { ListFeatureNameResponse } from './responses/list-feature-name.response';
import { UpdateFeatureNameResponse } from './responses/update-feature-name.response';

@Controller('feature-name')
export class FeatureNameController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  /**
   * Get feature name by id
   * @param {GetFeatureNameParamRequest.id} id - Feature name id
   * @returns {Promise<GetFeatureNameResponse>} - Feature name
   */
  @Get('/id')
  async getFeatureName(
    @Param() { id }: GetFeatureNameParamRequest,
  ): Promise<GetFeatureNameResponse> {
    return await this.queryBus.execute<
      GetFeatureNameQuery,
      GetFeatureNameResponse
    >(new GetFeatureNameQuery(id));
  }

  /**
   * List feature names
   * @param {ListFeatureNameRequest.ids} ids - List of feature name ids
   * @returns {Promise<ListFeatureNameResponse>} - List of feature names
   */
  @Get()
  async listFeatureNames(
    @Query() { ids }: ListFeatureNameQueryRequest,
  ): Promise<ListFeatureNameResponse> {
    return await this.queryBus.execute<
      ListFeatureNameQuery,
      ListFeatureNameResponse
    >(new ListFeatureNameQuery(ids));
  }

  /**
   * Create feature name
   * @param {CreateFeatureNameRequest} payload - Feature name data
   * @returns {Promise<CreateFeatureNameResponse>} - Created feature name
   */
  @Post()
  async createFeatureName(
    @Body() payload: CreateFeatureNameRequest,
  ): Promise<CreateFeatureNameResponse> {
    return await this.commandBus.execute<
      CreateFeatureNameCommand,
      CreateFeatureNameResponse
    >(new CreateFeatureNameCommand(payload));
  }

  /**
   * Update feature name
   * @param {UpdateFeatureNameParamRequest.id} id - Feature name id
   * @param {UpdateFeatureNameRequest} payload - Feature name data
   * @returns {Promise<UpdateFeatureNameResponse>} - Updated feature name
   */
  @Patch(':id')
  async updateFeatureName(
    @Param() { id }: UpdateFeatureNameParamRequest,
    @Body() payload: UpdateFeatureNameRequest,
  ): Promise<UpdateFeatureNameResponse> {
    return await this.commandBus.execute<
      UpdateFeatureNameCommand,
      UpdateFeatureNameResponse
    >(
      new UpdateFeatureNameCommand({
        id,
        ...payload,
      }),
    );
  }
}
