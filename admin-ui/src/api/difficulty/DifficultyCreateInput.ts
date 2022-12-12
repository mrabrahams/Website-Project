import { ExerciseCreateNestedManyWithoutDifficultiesInput } from "./ExerciseCreateNestedManyWithoutDifficultiesInput";

export type DifficultyCreateInput = {
  advanced?: string | null;
  beginner?: string | null;
  elite?: string | null;
  exercises?: ExerciseCreateNestedManyWithoutDifficultiesInput;
  expert?: string | null;
  intermediate?: string | null;
};
