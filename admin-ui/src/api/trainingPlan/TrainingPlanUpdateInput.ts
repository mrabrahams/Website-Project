import { ExerciseUpdateManyWithoutTrainingPlansInput } from "./ExerciseUpdateManyWithoutTrainingPlansInput";
import { GoalUpdateManyWithoutTrainingPlansInput } from "./GoalUpdateManyWithoutTrainingPlansInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkoutUpdateManyWithoutTrainingPlansInput } from "./WorkoutUpdateManyWithoutTrainingPlansInput";

export type TrainingPlanUpdateInput = {
  exercise?: ExerciseUpdateManyWithoutTrainingPlansInput;
  goal?: GoalUpdateManyWithoutTrainingPlansInput;
  name?: string;
  targetBodyPart?: string | null;
  user?: UserWhereUniqueInput | null;
  workouts?: WorkoutUpdateManyWithoutTrainingPlansInput;
};
