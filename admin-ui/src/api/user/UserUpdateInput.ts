import { InputJsonValue } from "../../types";
import { TrainingPlanUpdateManyWithoutUsersInput } from "./TrainingPlanUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  trainingPlans?: TrainingPlanUpdateManyWithoutUsersInput;
  username?: string;
};
