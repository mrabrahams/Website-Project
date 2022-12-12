import { Exercise } from "../exercise/Exercise";

export type Difficulty = {
  advanced: string | null;
  beginner: string | null;
  createdAt: Date;
  elite: string | null;
  exercises?: Array<Exercise>;
  expert: string | null;
  id: string;
  intermediate: string | null;
  updatedAt: Date;
};
