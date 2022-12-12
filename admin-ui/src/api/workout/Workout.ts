import { ExerciseLog } from "../exerciseLog/ExerciseLog";
import { TrainingPlan } from "../trainingPlan/TrainingPlan";

export type Workout = {
  createdAt: Date;
  date: Date | null;
  exerciseLog?: ExerciseLog | null;
  exerciseLogs?: Array<ExerciseLog>;
  id: string;
  trainingPlan?: TrainingPlan | null;
  updatedAt: Date;
};
