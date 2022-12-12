import { Workout as TWorkout } from "../api/workout/Workout";

export const WORKOUT_TITLE_FIELD = "id";

export const WorkoutTitle = (record: TWorkout): string => {
  return record.id || record.id;
};
