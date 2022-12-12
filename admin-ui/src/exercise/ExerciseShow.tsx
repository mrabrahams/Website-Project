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

import { EXERCISE_TITLE_FIELD } from "./ExerciseTitle";
import { WORKOUT_TITLE_FIELD } from "../workout/WorkoutTitle";
import { DIFFICULTY_TITLE_FIELD } from "../difficulty/DifficultyTitle";

export const ExerciseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <ReferenceField
          label="Difficulty"
          source="difficulty.id"
          reference="Difficulty"
        >
          <TextField source={DIFFICULTY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Equipment_Needed" source="equipmentNeeded" />
        <TextField label="ID" source="id" />
        <TextField label="Image_Link" source="imageLink" />
        <TextField label="Name" source="name" />
        <TextField label="Target_Muscle_Groups" source="targetbodyPart" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Video_Link" source="videoLink" />
        <ReferenceManyField
          reference="ExerciseLog"
          target="ExerciseId"
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
        <ReferenceManyField reference="Goal" target="ExerciseId" label="Goals">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Current_Reps" source="currentReps" />
            <TextField label="Current_Weight" source="currentWeight" />
            <TextField label="Deadline" source="deadline" />
            <ReferenceField
              label="Exercise"
              source="exercise.id"
              reference="Exercise"
            >
              <TextField source={EXERCISE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Motivation" source="motivation" />
            <TextField label="Target_Reps" source="targetReps" />
            <TextField label="Target_Weight" source="targetWeight" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
