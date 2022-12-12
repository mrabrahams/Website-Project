import { ExerciseLogWhereInput } from "./ExerciseLogWhereInput";
import { ExerciseLogOrderByInput } from "./ExerciseLogOrderByInput";

export type ExerciseLogFindManyArgs = {
  where?: ExerciseLogWhereInput;
  orderBy?: Array<ExerciseLogOrderByInput>;
  skip?: number;
  take?: number;
};
