import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DifficultyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Difficulties"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Advanced" source="advanced" />
        <TextField label="Beginner" source="beginner" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Elite" source="elite" />
        <TextField label="Expert" source="expert" />
        <TextField label="ID" source="id" />
        <TextField label="Intermediate" source="intermediate" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
