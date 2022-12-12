import { SortOrder } from "../../util/SortOrder";

export type GoalOrderByInput = {
  createdAt?: SortOrder;
  currentReps?: SortOrder;
  currentWeight?: SortOrder;
  deadline?: SortOrder;
  exerciseId?: SortOrder;
  id?: SortOrder;
  motivation?: SortOrder;
  targetReps?: SortOrder;
  targetWeight?: SortOrder;
  updatedAt?: SortOrder;
};
