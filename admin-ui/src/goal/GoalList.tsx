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
import { EXERCISE_TITLE_FIELD } from "../exercise/ExerciseTitle";

export const GoalList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Goals"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
