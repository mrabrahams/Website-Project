import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ExerciseTitle } from "../exercise/ExerciseTitle";
import { WorkoutTitle } from "../workout/WorkoutTitle";

export const ExerciseLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="exercise.id"
          reference="Exercise"
          label="Exercise"
        >
          <SelectInput optionText={ExerciseTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Reps" source="reps" />
        <NumberInput label="Sets" source="sets" />
        <NumberInput label="Weight" source="weight" />
        <ReferenceInput source="workout.id" reference="Workout" label="Workout">
          <SelectInput optionText={WorkoutTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="workouts"
          reference="Workout"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkoutTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
