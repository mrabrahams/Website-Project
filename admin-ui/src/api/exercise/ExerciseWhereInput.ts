import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DifficultyWhereUniqueInput } from "../difficulty/DifficultyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ExerciseLogListRelationFilter } from "../exerciseLog/ExerciseLogListRelationFilter";
import { GoalListRelationFilter } from "../goal/GoalListRelationFilter";
import { TrainingPlanListRelationFilter } from "../trainingPlan/TrainingPlanListRelationFilter";

export type ExerciseWhereInput = {
  description?: StringNullableFilter;
  difficulty?: DifficultyWhereUniqueInput;
  equipmentNeeded?: StringFilter;
  exerciseLogs?: ExerciseLogListRelationFilter;
  goals?: GoalListRelationFilter;
  id?: StringFilter;
  imageLink?: StringFilter;
  name?: StringFilter;
  targetbodyPart?: StringNullableFilter;
  trainingPlans?: TrainingPlanListRelationFilter;
  videoLink?: StringFilter;
};
