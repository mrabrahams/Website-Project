import { ExerciseWhereUniqueInput } from "../exercise/ExerciseWhereUniqueInput";
import { WorkoutWhereUniqueInput } from "../workout/WorkoutWhereUniqueInput";
import { WorkoutCreateNestedManyWithoutExerciseLogsInput } from "./WorkoutCreateNestedManyWithoutExerciseLogsInput";

export type ExerciseLogCreateInput = {
  exercise?: ExerciseWhereUniqueInput | null;
  reps?: number | null;
  sets?: number | null;
  weight?: number | null;
  workout?: WorkoutWhereUniqueInput | null;
  workouts?: WorkoutCreateNestedManyWithoutExerciseLogsInput;
};
