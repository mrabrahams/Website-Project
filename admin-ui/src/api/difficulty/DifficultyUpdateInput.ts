import { ExerciseUpdateManyWithoutDifficultiesInput } from "./ExerciseUpdateManyWithoutDifficultiesInput";

export type DifficultyUpdateInput = {
  advanced?: string | null;
  beginner?: string | null;
  elite?: string | null;
  exercises?: ExerciseUpdateManyWithoutDifficultiesInput;
  expert?: string | null;
  intermediate?: string | null;
};
