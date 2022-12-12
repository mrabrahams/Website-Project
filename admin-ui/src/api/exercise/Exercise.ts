import { Difficulty } from "../difficulty/Difficulty";
import { ExerciseLog } from "../exerciseLog/ExerciseLog";
import { Goal } from "../goal/Goal";
import { TrainingPlan } from "../trainingPlan/TrainingPlan";

export type Exercise = {
  createdAt: Date;
  description: string | null;
  difficulty?: Difficulty | null;
  equipmentNeeded: string;
  exerciseLogs?: Array<ExerciseLog>;
  goals?: Array<Goal>;
  id: string;
  imageLink: string;
  name: string;
  targetbodyPart: string | null;
  trainingPlans?: Array<TrainingPlan>;
  updatedAt: Date;
  videoLink: string;
};
