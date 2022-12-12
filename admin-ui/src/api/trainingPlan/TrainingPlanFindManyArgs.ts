import { TrainingPlanWhereInput } from "./TrainingPlanWhereInput";
import { TrainingPlanOrderByInput } from "./TrainingPlanOrderByInput";

export type TrainingPlanFindManyArgs = {
  where?: TrainingPlanWhereInput;
  orderBy?: Array<TrainingPlanOrderByInput>;
  skip?: number;
  take?: number;
};
