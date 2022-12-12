import { ExerciseLog as TExerciseLog } from "../api/exerciseLog/ExerciseLog";

export const EXERCISELOG_TITLE_FIELD = "id";

export const ExerciseLogTitle = (record: TExerciseLog): string => {
  return record.id || record.id;
};
