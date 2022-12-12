import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DIFFICULTY_TITLE_FIELD } from "./DifficultyTitle";

export const DifficultyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Advanced" source="advanced" />
        <TextField label="Beginner" source="beginner" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Elite" source="elite" />
        <TextField label="Expert" source="expert" />
        <TextField label="ID" source="id" />
        <TextField label="Intermediate" source="intermediate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Exercise"
          target="DifficultyId"
          label="Exercises"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
