import React from 'react';
import {
  CheckBox,
  Text
} from "@rneui/themed";
import PriorityLevel from "../components/PriorityLevel";
import ITaskModel from "../models/taskModel";
import {StyleSheet} from "react-native";

type Props = {
  task: ITaskModel;
  editHandlers: React.Dispatch<React.SetStateAction<ITaskModel>>;
};

const TaskDetails: React.FC<Props> = ({ task, editHandlers }) => {
  return (
    <>
      <Text h3 style={styles.title}>{task.name}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <PriorityLevel repeat={task.priority} />
      <CheckBox checked={task.isDone} onPress={() => editHandlers({...task, isDone: !task.isDone})} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center"
  },
  description: {
    marginTop: 30,
    marginBottom: 30
  }
});

export default TaskDetails;
