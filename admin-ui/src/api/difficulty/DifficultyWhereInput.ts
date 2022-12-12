import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExerciseListRelationFilter } from "../exercise/ExerciseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type DifficultyWhereInput = {
  advanced?: StringNullableFilter;
  beginner?: StringNullableFilter;
  elite?: StringNullableFilter;
  exercises?: ExerciseListRelationFilter;
  expert?: StringNullableFilter;
  id?: StringFilter;
  intermediate?: StringNullableFilter;
};
