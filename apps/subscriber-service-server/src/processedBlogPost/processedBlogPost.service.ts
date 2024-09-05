import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcessedBlogPostServiceBase } from "./base/processedBlogPost.service.base";

@Injectable()
export class ProcessedBlogPostService extends ProcessedBlogPostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
