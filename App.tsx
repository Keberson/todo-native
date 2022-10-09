import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import TaskScreen from "./screens/TaskScreen";
import ITaskModel from "./src/models/taskModel";

export type RootStackParams = {
  Home: undefined
  Task: {
    task: ITaskModel;
  };
}

const RootStack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Task" component={TaskScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
