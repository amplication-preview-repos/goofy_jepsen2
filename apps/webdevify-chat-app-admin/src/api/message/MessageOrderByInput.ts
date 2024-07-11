import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  text?: SortOrder;
  timestamp?: SortOrder;
  sender?: SortOrder;
  chatId?: SortOrder;
};
