import { SortOrder } from "../../util/SortOrder";

export type TrainingPlanOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  targetBodyPart?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
