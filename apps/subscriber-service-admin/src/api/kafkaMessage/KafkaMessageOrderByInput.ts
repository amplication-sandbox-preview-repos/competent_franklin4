import { SortOrder } from "../../util/SortOrder";

export type KafkaMessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
