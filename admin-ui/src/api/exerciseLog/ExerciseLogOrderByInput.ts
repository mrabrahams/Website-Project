import { SortOrder } from "../../util/SortOrder";

export type ExerciseLogOrderByInput = {
  createdAt?: SortOrder;
  exerciseId?: SortOrder;
  id?: SortOrder;
  reps?: SortOrder;
  sets?: SortOrder;
  updatedAt?: SortOrder;
  weight?: SortOrder;
  workoutId?: SortOrder;
};
