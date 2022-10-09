import React from "react";
import {observer} from "mobx-react-lite";
import {
  View,
  Text,
  TouchableOpacity, StyleSheet
} from "react-native";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {Card, FAB} from "@rneui/themed"
import {CheckBox} from "@rneui/base";
import ITaskModel from "../models/taskModel";
import {RootStackParams} from "../../App";
import PriorityLevel from "./PriorityLevel";
import data from "../store/ToDoStore";

type TaskProps = {
  task: ITaskModel;
  toggleCheckbox: () => void;
}

const TaskCard: React.FC<TaskProps> = observer(({ task, toggleCheckbox }) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Task', { task })} style={styles.container}>
      <Card>
        <Card.Title style={styles.card_title}>
          <Text>{task.name}</Text>
        </Card.Title>
        <PriorityLevel repeat={task.priority} />
        <Card.Divider />
        <View>
          <Text>{task.description}</Text>
          <CheckBox checked={task.isDone} onPress={() => toggleCheckbox()} />
          <FAB
            placement="right"
            size="small"
            icon={{ name: "delete", color: "#fff" }}
            color="#FF0000"
            onPress={() => data.deleteTask(task.id)}
          />
        </View>
      </Card>
    </TouchableOpacity>
  )
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  card_title: {
    flex: 1
  }
});

export default TaskCard;