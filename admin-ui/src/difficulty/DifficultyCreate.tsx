import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ExerciseTitle } from "../exercise/ExerciseTitle";

export const DifficultyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Advanced" source="advanced" />
        <TextInput label="Beginner" source="beginner" />
        <TextInput label="Elite" source="elite" />
        <ReferenceArrayInput
          source="exercises"
          reference="Exercise"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExerciseTitle} />
        </ReferenceArrayInput>
        <TextInput label="Expert" source="expert" />
        <TextInput label="Intermediate" source="intermediate" />
      </SimpleForm>
    </Create>
  );
};
