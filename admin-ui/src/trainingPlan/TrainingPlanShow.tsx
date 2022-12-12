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

import { EXERCISELOG_TITLE_FIELD } from "../exerciseLog/ExerciseLogTitle";
import { TRAININGPLAN_TITLE_FIELD } from "./TrainingPlanTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TrainingPlanShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Target_Body_Parts" source="targetBodyPart" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Workout"
          target="TrainingPlanId"
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
