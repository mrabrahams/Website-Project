import { DifficultyWhereUniqueInput } from "../difficulty/DifficultyWhereUniqueInput";
import { ExerciseLogUpdateManyWithoutExercisesInput } from "./ExerciseLogUpdateManyWithoutExercisesInput";
import { GoalUpdateManyWithoutExercisesInput } from "./GoalUpdateManyWithoutExercisesInput";
import { TrainingPlanUpdateManyWithoutExercisesInput } from "./TrainingPlanUpdateManyWithoutExercisesInput";

export type ExerciseUpdateInput = {
  description?: string | null;
  difficulty?: DifficultyWhereUniqueInput | null;
  equipmentNeeded?: string;
  exerciseLogs?: ExerciseLogUpdateManyWithoutExercisesInput;
  goals?: GoalUpdateManyWithoutExercisesInput;
  imageLink?: string;
  name?: string;
  targetbodyPart?: string | null;
  trainingPlans?: TrainingPlanUpdateManyWithoutExercisesInput;
  videoLink?: string;
};
