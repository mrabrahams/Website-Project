import { DifficultyWhereInput } from "./DifficultyWhereInput";
import { DifficultyOrderByInput } from "./DifficultyOrderByInput";

export type DifficultyFindManyArgs = {
  where?: DifficultyWhereInput;
  orderBy?: Array<DifficultyOrderByInput>;
  skip?: number;
  take?: number;
};
