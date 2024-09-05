import { ProcessedBlogPostWhereInput } from "./ProcessedBlogPostWhereInput";
import { ProcessedBlogPostOrderByInput } from "./ProcessedBlogPostOrderByInput";

export type ProcessedBlogPostFindManyArgs = {
  where?: ProcessedBlogPostWhereInput;
  orderBy?: Array<ProcessedBlogPostOrderByInput>;
  skip?: number;
  take?: number;
};
