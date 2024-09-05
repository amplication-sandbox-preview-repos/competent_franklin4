import { Module } from "@nestjs/common";
import { ProcessedBlogPostModuleBase } from "./base/processedBlogPost.module.base";
import { ProcessedBlogPostService } from "./processedBlogPost.service";
import { ProcessedBlogPostController } from "./processedBlogPost.controller";
import { ProcessedBlogPostResolver } from "./processedBlogPost.resolver";

@Module({
  imports: [ProcessedBlogPostModuleBase],
  controllers: [ProcessedBlogPostController],
  providers: [ProcessedBlogPostService, ProcessedBlogPostResolver],
  exports: [ProcessedBlogPostService],
})
export class ProcessedBlogPostModule {}
