import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TrainingPlanList } from "./trainingPlan/TrainingPlanList";
import { TrainingPlanCreate } from "./trainingPlan/TrainingPlanCreate";
import { TrainingPlanEdit } from "./trainingPlan/TrainingPlanEdit";
import { TrainingPlanShow } from "./trainingPlan/TrainingPlanShow";
import { ExerciseList } from "./exercise/ExerciseList";
import { ExerciseCreate } from "./exercise/ExerciseCreate";
import { ExerciseEdit } from "./exercise/ExerciseEdit";
import { ExerciseShow } from "./exercise/ExerciseShow";
import { WorkoutList } from "./workout/WorkoutList";
import { WorkoutCreate } from "./workout/WorkoutCreate";
import { WorkoutEdit } from "./workout/WorkoutEdit";
import { WorkoutShow } from "./workout/WorkoutShow";
import { ExerciseLogList } from "./exerciseLog/ExerciseLogList";
import { ExerciseLogCreate } from "./exerciseLog/ExerciseLogCreate";
import { ExerciseLogEdit } from "./exerciseLog/ExerciseLogEdit";
import { ExerciseLogShow } from "./exerciseLog/ExerciseLogShow";
import { GoalList } from "./goal/GoalList";
import { GoalCreate } from "./goal/GoalCreate";
import { GoalEdit } from "./goal/GoalEdit";
import { GoalShow } from "./goal/GoalShow";
import { DifficultyList } from "./difficulty/DifficultyList";
import { DifficultyCreate } from "./difficulty/DifficultyCreate";
import { DifficultyEdit } from "./difficulty/DifficultyEdit";
import { DifficultyShow } from "./difficulty/DifficultyShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="TrainingPlan"
          list={TrainingPlanList}
          edit={TrainingPlanEdit}
          create={TrainingPlanCreate}
          show={TrainingPlanShow}
        />
        <Resource
          name="Exercise"
          list={ExerciseList}
          edit={ExerciseEdit}
          create={ExerciseCreate}
          show={ExerciseShow}
        />
        <Resource
          name="Workout"
          list={WorkoutList}
          edit={WorkoutEdit}
          create={WorkoutCreate}
          show={WorkoutShow}
        />
        <Resource
          name="ExerciseLog"
          list={ExerciseLogList}
          edit={ExerciseLogEdit}
          create={ExerciseLogCreate}
          show={ExerciseLogShow}
        />
        <Resource
          name="Goal"
          list={GoalList}
          edit={GoalEdit}
          create={GoalCreate}
          show={GoalShow}
        />
        <Resource
          name="Difficulty"
          list={DifficultyList}
          edit={DifficultyEdit}
          create={DifficultyCreate}
          show={DifficultyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
