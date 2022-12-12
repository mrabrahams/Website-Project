import { Exercise } from "../exercise/Exercise";
import { Workout } from "../workout/Workout";

export type ExerciseLog = {
  createdAt: Date;
  exercise?: Exercise | null;
  id: string;
  reps: number | null;
  sets: number | null;
  updatedAt: Date;
  weight: number | null;
  workout?: Workout | null;
  workouts?: Array<Workout>;
};
