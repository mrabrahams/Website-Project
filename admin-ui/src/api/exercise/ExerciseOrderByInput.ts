import { SortOrder } from "../../util/SortOrder";

export type ExerciseOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  difficultyId?: SortOrder;
  equipmentNeeded?: SortOrder;
  id?: SortOrder;
  imageLink?: SortOrder;
  name?: SortOrder;
  targetbodyPart?: SortOrder;
  updatedAt?: SortOrder;
  videoLink?: SortOrder;
};
