import { ExerciseLogWhereUniqueInput } from "../exerciseLog/ExerciseLogWhereUniqueInput";
import { ExerciseLogCreateNestedManyWithoutWorkoutsInput } from "./ExerciseLogCreateNestedManyWithoutWorkoutsInput";
import { TrainingPlanWhereUniqueInput } from "../trainingPlan/TrainingPlanWhereUniqueInput";

export type WorkoutCreateInput = {
  date?: Date | null;
  exerciseLog?: ExerciseLogWhereUniqueInput | null;
  exerciseLogs?: ExerciseLogCreateNestedManyWithoutWorkoutsInput;
  trainingPlan?: TrainingPlanWhereUniqueInput | null;
};
