import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ExerciseLogTitle } from "../exerciseLog/ExerciseLogTitle";
import { TrainingPlanTitle } from "../trainingPlan/TrainingPlanTitle";

export const WorkoutCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <ReferenceInput
          source="exerciselog.id"
          reference="ExerciseLog"
          label="Exercise_Log"
        >
          <SelectInput optionText={ExerciseLogTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="exerciseLogs"
          reference="ExerciseLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExerciseLogTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="trainingplan.id"
          reference="TrainingPlan"
          label="Training_Plan"
        >
          <SelectInput optionText={TrainingPlanTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
