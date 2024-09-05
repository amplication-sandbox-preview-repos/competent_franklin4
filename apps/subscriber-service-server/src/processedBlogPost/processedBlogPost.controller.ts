import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessedBlogPostService } from "./processedBlogPost.service";
import { ProcessedBlogPostControllerBase } from "./base/processedBlogPost.controller.base";

@swagger.ApiTags("processedBlogPosts")
@common.Controller("processedBlogPosts")
export class ProcessedBlogPostController extends ProcessedBlogPostControllerBase {
  constructor(protected readonly service: ProcessedBlogPostService) {
    super(service);
  }
}
