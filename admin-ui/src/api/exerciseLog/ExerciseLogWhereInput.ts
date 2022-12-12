import { ExerciseWhereUniqueInput } from "../exercise/ExerciseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { WorkoutWhereUniqueInput } from "../workout/WorkoutWhereUniqueInput";
import { WorkoutListRelationFilter } from "../workout/WorkoutListRelationFilter";

export type ExerciseLogWhereInput = {
  exercise?: ExerciseWhereUniqueInput;
  id?: StringFilter;
  reps?: IntNullableFilter;
  sets?: FloatNullableFilter;
  weight?: FloatNullableFilter;
  workout?: WorkoutWhereUniqueInput;
  workouts?: WorkoutListRelationFilter;
};
