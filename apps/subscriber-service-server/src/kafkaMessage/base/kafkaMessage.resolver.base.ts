/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { KafkaMessage } from "./KafkaMessage";
import { KafkaMessageCountArgs } from "./KafkaMessageCountArgs";
import { KafkaMessageFindManyArgs } from "./KafkaMessageFindManyArgs";
import { KafkaMessageFindUniqueArgs } from "./KafkaMessageFindUniqueArgs";
import { DeleteKafkaMessageArgs } from "./DeleteKafkaMessageArgs";
import { KafkaMessageService } from "../kafkaMessage.service";
@graphql.Resolver(() => KafkaMessage)
export class KafkaMessageResolverBase {
  constructor(protected readonly service: KafkaMessageService) {}

  async _kafkaMessagesMeta(
    @graphql.Args() args: KafkaMessageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [KafkaMessage])
  async kafkaMessages(
    @graphql.Args() args: KafkaMessageFindManyArgs
  ): Promise<KafkaMessage[]> {
    return this.service.kafkaMessages(args);
  }

  @graphql.Query(() => KafkaMessage, { nullable: true })
  async kafkaMessage(
    @graphql.Args() args: KafkaMessageFindUniqueArgs
  ): Promise<KafkaMessage | null> {
    const result = await this.service.kafkaMessage(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => KafkaMessage)
  async deleteKafkaMessage(
    @graphql.Args() args: DeleteKafkaMessageArgs
  ): Promise<KafkaMessage | null> {
    try {
      return await this.service.deleteKafkaMessage(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
