import { SortOrder } from "../../util/SortOrder";

export type WorkoutOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  exerciseLogId?: SortOrder;
  id?: SortOrder;
  trainingPlanId?: SortOrder;
  updatedAt?: SortOrder;
};
