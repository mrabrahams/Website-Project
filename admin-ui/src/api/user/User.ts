import { JsonValue } from "type-fest";
import { TrainingPlan } from "../trainingPlan/TrainingPlan";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  trainingPlans?: Array<TrainingPlan>;
  updatedAt: Date;
  username: string;
};
