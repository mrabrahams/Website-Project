import { TrainingPlan as TTrainingPlan } from "../api/trainingPlan/TrainingPlan";

export const TRAININGPLAN_TITLE_FIELD = "name";

export const TrainingPlanTitle = (record: TTrainingPlan): string => {
  return record.name || record.id;
};
