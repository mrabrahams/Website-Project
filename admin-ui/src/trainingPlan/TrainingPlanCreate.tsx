import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ExerciseTitle } from "../exercise/ExerciseTitle";
import { GoalTitle } from "../goal/GoalTitle";
import { UserTitle } from "../user/UserTitle";
import { WorkoutTitle } from "../workout/WorkoutTitle";

export const TrainingPlanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="exercise"
          reference="Exercise"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExerciseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="goal"
          reference="Goal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GoalTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Target_Body_Parts" source="targetBodyPart" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
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
