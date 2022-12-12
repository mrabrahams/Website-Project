import { SortOrder } from "../../util/SortOrder";

export type DifficultyOrderByInput = {
  advanced?: SortOrder;
  beginner?: SortOrder;
  createdAt?: SortOrder;
  elite?: SortOrder;
  expert?: SortOrder;
  id?: SortOrder;
  intermediate?: SortOrder;
  updatedAt?: SortOrder;
};
