import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EXERCISE_TITLE_FIELD } from "../exercise/ExerciseTitle";
import { WORKOUT_TITLE_FIELD } from "./WorkoutTitle";
import { EXERCISELOG_TITLE_FIELD } from "../exerciseLog/ExerciseLogTitle";
import { TRAININGPLAN_TITLE_FIELD } from "../trainingPlan/TrainingPlanTitle";

export const WorkoutShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <ReferenceField
          label="Exercise_Log"
          source="exerciselog.id"
          reference="ExerciseLog"
        >
          <TextField source={EXERCISELOG_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Training_Plan"
          source="trainingplan.id"
          reference="TrainingPlan"
        >
          <TextField source={TRAININGPLAN_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ExerciseLog"
          target="WorkoutId"
          label="Exercise Logs"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Exercise"
              source="exercise.id"
              reference="Exercise"
            >
              <TextField source={EXERCISE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Reps" source="reps" />
            <TextField label="Sets" source="sets" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Weight" source="weight" />
            <ReferenceField
              label="Workout"
              source="workout.id"
              reference="Workout"
            >
              <TextField source={WORKOUT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
