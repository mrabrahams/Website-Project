import { ExerciseWhereUniqueInput } from "../exercise/ExerciseWhereUniqueInput";
import { TrainingPlanUpdateManyWithoutGoalsInput } from "./TrainingPlanUpdateManyWithoutGoalsInput";

export type GoalUpdateInput = {
  currentReps?: number | null;
  currentWeight?: number | null;
  deadline?: Date | null;
  exercise?: ExerciseWhereUniqueInput | null;
  motivation?: string | null;
  targetReps?: number | null;
  targetWeight?: number | null;
  trainingPlans?: TrainingPlanUpdateManyWithoutGoalsInput;
};
