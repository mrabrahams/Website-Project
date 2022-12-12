import { InputJsonValue } from "../../types";
import { TrainingPlanCreateNestedManyWithoutUsersInput } from "./TrainingPlanCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  trainingPlans?: TrainingPlanCreateNestedManyWithoutUsersInput;
  username: string;
};
