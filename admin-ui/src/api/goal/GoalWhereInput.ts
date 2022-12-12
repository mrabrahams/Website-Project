import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ExerciseWhereUniqueInput } from "../exercise/ExerciseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TrainingPlanListRelationFilter } from "../trainingPlan/TrainingPlanListRelationFilter";

export type GoalWhereInput = {
  currentReps?: IntNullableFilter;
  currentWeight?: FloatNullableFilter;
  deadline?: DateTimeNullableFilter;
  exercise?: ExerciseWhereUniqueInput;
  id?: StringFilter;
  motivation?: StringNullableFilter;
  targetReps?: IntNullableFilter;
  targetWeight?: FloatNullableFilter;
  trainingPlans?: TrainingPlanListRelationFilter;
};
