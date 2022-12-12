import { ExerciseListRelationFilter } from "../exercise/ExerciseListRelationFilter";
import { GoalListRelationFilter } from "../goal/GoalListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkoutListRelationFilter } from "../workout/WorkoutListRelationFilter";

export type TrainingPlanWhereInput = {
  exercise?: ExerciseListRelationFilter;
  goal?: GoalListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  targetBodyPart?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  workouts?: WorkoutListRelationFilter;
};
