import { Difficulty as TDifficulty } from "../api/difficulty/Difficulty";

export const DIFFICULTY_TITLE_FIELD = "advanced";

export const DifficultyTitle = (record: TDifficulty): string => {
  return record.advanced || record.id;
};
