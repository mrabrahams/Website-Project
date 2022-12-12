import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ExerciseTitle } from "../exercise/ExerciseTitle";
import { TrainingPlanTitle } from "../trainingPlan/TrainingPlanTitle";

export const GoalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Current_Reps" source="currentReps" />
        <NumberInput label="Current_Weight" source="currentWeight" />
        <DateInput label="Deadline" source="deadline" />
        <ReferenceInput
          source="exercise.id"
          reference="Exercise"
          label="Exercise"
        >
          <SelectInput optionText={ExerciseTitle} />
        </ReferenceInput>
        <TextInput label="Motivation" source="motivation" />
        <NumberInput step={1} label="Target_Reps" source="targetReps" />
        <NumberInput label="Target_Weight" source="targetWeight" />
        <ReferenceArrayInput
          source="trainingPlans"
          reference="TrainingPlan"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TrainingPlanTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
