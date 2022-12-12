import { Exercise } from "../exercise/Exercise";
import { Goal } from "../goal/Goal";
import { User } from "../user/User";
import { Workout } from "../workout/Workout";

export type TrainingPlan = {
  createdAt: Date;
  exercise?: Array<Exercise>;
  goal?: Array<Goal>;
  id: string;
  name: string;
  targetBodyPart: string | null;
  updatedAt: Date;
  user?: User | null;
  workouts?: Array<Workout>;
};
