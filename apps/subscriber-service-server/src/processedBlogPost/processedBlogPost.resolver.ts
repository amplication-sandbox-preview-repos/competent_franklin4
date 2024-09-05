import * as graphql from "@nestjs/graphql";
import { ProcessedBlogPostResolverBase } from "./base/processedBlogPost.resolver.base";
import { ProcessedBlogPost } from "./base/ProcessedBlogPost";
import { ProcessedBlogPostService } from "./processedBlogPost.service";

@graphql.Resolver(() => ProcessedBlogPost)
export class ProcessedBlogPostResolver extends ProcessedBlogPostResolverBase {
  constructor(protected readonly service: ProcessedBlogPostService) {
    super(service);
  }
}
