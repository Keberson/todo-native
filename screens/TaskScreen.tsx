import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import {
  FAB
} from "@rneui/themed";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParams} from "../App";
import TaskDetails from "../components/TaskDetails";
import TaskEdit from "../components/TaskEdit";
import data from '../classes/ToDo'
import ITaskModel from "../models/taskModel";

type Props = NativeStackScreenProps<RootStackParams, 'Task'>;

const TaskScreen = ({ route, navigation }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [taskEditing, setTaskEditing] = useState<ITaskModel>(route.params.task);

  return (
    <>
      <ScrollView style={styles.container} contentContainerStyle={styles.content_container}>
        {
          isEditMode
            ?
              <TaskEdit taskInit={taskEditing} editHandlers={setTaskEditing}  verticalButtons={false}/>
            :
              <TaskDetails task={taskEditing}  editHandlers={setTaskEditing}/>
        }
      </ScrollView>
      <>
        {
          isEditMode
            ?
              <FAB
                placement="right"
                icon={{ name: "save", color: "#fff" }}
                color="#2089dc"
                onPress={() => {
                  data.editTask(taskEditing);
                  setIsEditMode(!isEditMode);
                }}
              />
            :
              <FAB
                placement="right"
                icon={{ name: "edit", color: "#fff" }}
                color="#2089dc"
                onPress={() => setIsEditMode(!isEditMode)}
              />
        }
      </>
      <FAB
        placement="left"
        icon={{ name: "delete", color: "#fff" }}
        color="#FF0000"
        onPress={() => {
          data.deleteTask(taskEditing.id);
          navigation.goBack();
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content_container: {
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 25,
    paddingRight: 25
  }
});

export default TaskScreen;
