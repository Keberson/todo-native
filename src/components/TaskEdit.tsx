import React from 'react';
import {
  ButtonGroup,
  Input,
  Text
} from "@rneui/themed";
import {
  StyleSheet,
  View
} from "react-native";
import ITaskModel from "../models/taskModel";

type Props = {
  taskInit: ITaskModel;
  editHandlers: React.Dispatch<React.SetStateAction<ITaskModel>>;
  verticalButtons: boolean;
};

const TaskEdit = ({ taskInit, editHandlers, verticalButtons }: Props) => {
  return (
    <>
      <View style={styles.group}>
        <Text h4 style={styles.group_title}>Name</Text>
        <Input
          placeholder="Task name"
          value={taskInit.name}
          onChangeText={(text) => editHandlers({...taskInit, name: text})}
        />
      </View>
      <View style={styles.group}>
        <Text h4 style={styles.group_title}>Description</Text>
        <Input
          placeholder="Task description"
          value={taskInit.description}
          onChangeText={(text) => editHandlers({...taskInit, description: text})}
        />
      </View>
      <View style={styles.group}>
        <Text h4 style={styles.group_title}>Priority</Text>
        <ButtonGroup
          buttons={['Without', 'Low', 'Middle', 'High']}
          selectedIndex={taskInit.priority}
          onPress={(value) => editHandlers({...taskInit, priority: value})}
          vertical={verticalButtons}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  group: {
    width: "100%"
  },
  group_title: {
    textAlign: "center"
  }

});

export default TaskEdit;
