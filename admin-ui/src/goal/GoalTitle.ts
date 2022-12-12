import { Goal as TGoal } from "../api/goal/Goal";

export const GOAL_TITLE_FIELD = "motivation";

export const GoalTitle = (record: TGoal): string => {
  return record.motivation || record.id;
};
