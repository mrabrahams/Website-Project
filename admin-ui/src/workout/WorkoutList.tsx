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
import { EXERCISELOG_TITLE_FIELD } from "../exerciseLog/ExerciseLogTitle";
import { TRAININGPLAN_TITLE_FIELD } from "../trainingPlan/TrainingPlanTitle";

export const WorkoutList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Workouts"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
