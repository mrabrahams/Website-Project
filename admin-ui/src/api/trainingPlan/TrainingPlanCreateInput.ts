import { ExerciseCreateNestedManyWithoutTrainingPlansInput } from "./ExerciseCreateNestedManyWithoutTrainingPlansInput";
import { GoalCreateNestedManyWithoutTrainingPlansInput } from "./GoalCreateNestedManyWithoutTrainingPlansInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkoutCreateNestedManyWithoutTrainingPlansInput } from "./WorkoutCreateNestedManyWithoutTrainingPlansInput";

export type TrainingPlanCreateInput = {
  exercise?: ExerciseCreateNestedManyWithoutTrainingPlansInput;
  goal?: GoalCreateNestedManyWithoutTrainingPlansInput;
  name: string;
  targetBodyPart?: string | null;
  user?: UserWhereUniqueInput | null;
  workouts?: WorkoutCreateNestedManyWithoutTrainingPlansInput;
};
