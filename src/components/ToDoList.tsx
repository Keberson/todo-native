import React from 'react';
import {observer} from "mobx-react-lite";
import {
  FlatList,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import {
  Text
} from "@rneui/themed";
import TaskCard from "./TaskCard";
import data from '../store/ToDoStore'

type ToDoProps = {
  filter: string;
}

const ToDoList: React.FC<ToDoProps> = observer(({ filter }) => {
  const filteredData = filter === '' ? data?.todos : data?.todos.filter(task => task.name.startsWith(filter));

  return (
    <SafeAreaView style={styles.container}>
      {
        filteredData.length > 0
          ? <FlatList
            data={filteredData}
            renderItem={({ item }) =>
              <TaskCard
                key={Number(item.id)}
                task={item}
                toggleCheckbox={() => data?.toggleTask(item.id)}
              />
            }
          />
          : <Text h4 style={styles.empty}>No actually tasks</Text>
      }
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 100
  },
  empty: {
    marginTop: 50,
    padding: 20,
    textAlign: "center",
    color: "#868686"
  }
});

export default ToDoList;
