import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EXERCISE_TITLE_FIELD } from "../exercise/ExerciseTitle";
import { WORKOUT_TITLE_FIELD } from "../workout/WorkoutTitle";

export const ExerciseLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Exercise Logs"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Workout" source="workout.id" reference="Workout">
          <TextField source={WORKOUT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
