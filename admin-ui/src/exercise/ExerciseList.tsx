import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DIFFICULTY_TITLE_FIELD } from "../difficulty/DifficultyTitle";

export const ExerciseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Exercises"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
