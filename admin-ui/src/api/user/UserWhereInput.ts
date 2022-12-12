import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TrainingPlanListRelationFilter } from "../trainingPlan/TrainingPlanListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  trainingPlans?: TrainingPlanListRelationFilter;
  username?: StringFilter;
};
