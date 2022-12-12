import { DifficultyWhereUniqueInput } from "../difficulty/DifficultyWhereUniqueInput";
import { ExerciseLogCreateNestedManyWithoutExercisesInput } from "./ExerciseLogCreateNestedManyWithoutExercisesInput";
import { GoalCreateNestedManyWithoutExercisesInput } from "./GoalCreateNestedManyWithoutExercisesInput";
import { TrainingPlanCreateNestedManyWithoutExercisesInput } from "./TrainingPlanCreateNestedManyWithoutExercisesInput";

export type ExerciseCreateInput = {
  description?: string | null;
  difficulty?: DifficultyWhereUniqueInput | null;
  equipmentNeeded: string;
  exerciseLogs?: ExerciseLogCreateNestedManyWithoutExercisesInput;
  goals?: GoalCreateNestedManyWithoutExercisesInput;
  imageLink: string;
  name: string;
  targetbodyPart?: string | null;
  trainingPlans?: TrainingPlanCreateNestedManyWithoutExercisesInput;
  videoLink: string;
};
