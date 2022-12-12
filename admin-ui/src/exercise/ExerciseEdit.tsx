import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DifficultyTitle } from "../difficulty/DifficultyTitle";
import { ExerciseLogTitle } from "../exerciseLog/ExerciseLogTitle";
import { GoalTitle } from "../goal/GoalTitle";
import { TrainingPlanTitle } from "../trainingPlan/TrainingPlanTitle";

export const ExerciseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="difficulty.id"
          reference="Difficulty"
          label="Difficulty"
        >
          <SelectInput optionText={DifficultyTitle} />
        </ReferenceInput>
        <TextInput label="Equipment_Needed" source="equipmentNeeded" />
        <ReferenceArrayInput
          source="exerciseLogs"
          reference="ExerciseLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExerciseLogTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="goals"
          reference="Goal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GoalTitle} />
        </ReferenceArrayInput>
        <TextInput label="Image_Link" source="imageLink" />
        <TextInput label="Name" source="name" />
        <TextInput label="Target_Muscle_Groups" source="targetbodyPart" />
        <ReferenceArrayInput
          source="trainingPlans"
          reference="TrainingPlan"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TrainingPlanTitle} />
        </ReferenceArrayInput>
        <TextInput label="Video_Link" source="videoLink" />
      </SimpleForm>
    </Edit>
  );
};
