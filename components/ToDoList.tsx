import React from 'react';
import {observer} from "mobx-react-lite";
import {
  ScrollView, StyleSheet
} from 'react-native';
import {
  Text
} from "@rneui/themed";
import TaskCard from "../components/TaskCard";
import data from '../classes/ToDo'

type ToDoProps = {
  filter: string;
}

const ToDoList: React.FC<ToDoProps> = observer(({ filter }) => {
  const filteredData = filter === '' ? data?.todos : data?.todos.filter(task => task.name.startsWith(filter));

  return (
    <ScrollView style={styles.container}>
      {
        filteredData.length > 0
          ? filteredData.map((item) => {
            return (
              <TaskCard
                key={item.id}
                task={item}
                toggleCheckbox={() => data?.toggleTask(item.id) }
              />
            )
          })
          : <Text h4 style={styles.empty}>No actually tasks</Text>
      }
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 60
  },
  empty: {
    marginTop: 50,
    padding: 20,
    textAlign: "center",
    color: "#868686"
  }
});

export default ToDoList;
