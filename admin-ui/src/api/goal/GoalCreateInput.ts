import { ExerciseWhereUniqueInput } from "../exercise/ExerciseWhereUniqueInput";
import { TrainingPlanCreateNestedManyWithoutGoalsInput } from "./TrainingPlanCreateNestedManyWithoutGoalsInput";

export type GoalCreateInput = {
  currentReps?: number | null;
  currentWeight?: number | null;
  deadline?: Date | null;
  exercise?: ExerciseWhereUniqueInput | null;
  motivation?: string | null;
  targetReps?: number | null;
  targetWeight?: number | null;
  trainingPlans?: TrainingPlanCreateNestedManyWithoutGoalsInput;
};
