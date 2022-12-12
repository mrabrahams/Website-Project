import { ExerciseLogWhereUniqueInput } from "../exerciseLog/ExerciseLogWhereUniqueInput";
import { ExerciseLogUpdateManyWithoutWorkoutsInput } from "./ExerciseLogUpdateManyWithoutWorkoutsInput";
import { TrainingPlanWhereUniqueInput } from "../trainingPlan/TrainingPlanWhereUniqueInput";

export type WorkoutUpdateInput = {
  date?: Date | null;
  exerciseLog?: ExerciseLogWhereUniqueInput | null;
  exerciseLogs?: ExerciseLogUpdateManyWithoutWorkoutsInput;
  trainingPlan?: TrainingPlanWhereUniqueInput | null;
};
