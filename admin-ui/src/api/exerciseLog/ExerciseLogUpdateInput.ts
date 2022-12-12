import { ExerciseWhereUniqueInput } from "../exercise/ExerciseWhereUniqueInput";
import { WorkoutWhereUniqueInput } from "../workout/WorkoutWhereUniqueInput";
import { WorkoutUpdateManyWithoutExerciseLogsInput } from "./WorkoutUpdateManyWithoutExerciseLogsInput";

export type ExerciseLogUpdateInput = {
  exercise?: ExerciseWhereUniqueInput | null;
  reps?: number | null;
  sets?: number | null;
  weight?: number | null;
  workout?: WorkoutWhereUniqueInput | null;
  workouts?: WorkoutUpdateManyWithoutExerciseLogsInput;
};
