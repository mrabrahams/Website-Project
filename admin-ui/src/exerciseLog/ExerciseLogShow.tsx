import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EXERCISELOG_TITLE_FIELD } from "./ExerciseLogTitle";
import { TRAININGPLAN_TITLE_FIELD } from "../trainingPlan/TrainingPlanTitle";
import { EXERCISE_TITLE_FIELD } from "../exercise/ExerciseTitle";
import { WORKOUT_TITLE_FIELD } from "../workout/WorkoutTitle";

export const ExerciseLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Workout" source="workout.id" reference="Workout">
          <TextField source={WORKOUT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Workout"
          target="ExerciseLogId"
          label="Workouts"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
