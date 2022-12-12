import { Exercise } from "../exercise/Exercise";
import { TrainingPlan } from "../trainingPlan/TrainingPlan";

export type Goal = {
  createdAt: Date;
  currentReps: number | null;
  currentWeight: number | null;
  deadline: Date | null;
  exercise?: Exercise | null;
  id: string;
  motivation: string | null;
  targetReps: number | null;
  targetWeight: number | null;
  trainingPlans?: Array<TrainingPlan>;
  updatedAt: Date;
};
