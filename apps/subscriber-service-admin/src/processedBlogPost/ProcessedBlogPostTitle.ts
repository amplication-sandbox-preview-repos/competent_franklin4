import { ProcessedBlogPost as TProcessedBlogPost } from "../api/processedBlogPost/ProcessedBlogPost";

export const PROCESSEDBLOGPOST_TITLE_FIELD = "id";

export const ProcessedBlogPostTitle = (record: TProcessedBlogPost): string => {
  return record.id?.toString() || String(record.id);
};
