import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ExerciseLogWhereUniqueInput } from "../exerciseLog/ExerciseLogWhereUniqueInput";
import { ExerciseLogListRelationFilter } from "../exerciseLog/ExerciseLogListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TrainingPlanWhereUniqueInput } from "../trainingPlan/TrainingPlanWhereUniqueInput";

export type WorkoutWhereInput = {
  date?: DateTimeNullableFilter;
  exerciseLog?: ExerciseLogWhereUniqueInput;
  exerciseLogs?: ExerciseLogListRelationFilter;
  id?: StringFilter;
  trainingPlan?: TrainingPlanWhereUniqueInput;
};
