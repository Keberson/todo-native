import React, {useState} from 'react';
import {
  View
} from 'react-native';
import {
  Divider,
  Text,
  Input,
  ButtonGroup,
  Dialog,
} from "@rneui/themed";
import data from '../classes/ToDo'
import TaskEdit from "./TaskEdit";
import ITaskModel from "../models/taskModel";

type Props = {
  visibility: boolean;
  toggle: () => void;
}

const AddTask = ({ visibility, toggle }: Props) => {
  const [task, setTask] = useState<ITaskModel>({
    id: 0,
    name: '',
    description: '',
    priority: 0,
    isDone: false
  });

  return (
    <Dialog
      isVisible={visibility}
      onBackdropPress={toggle}
    >
      <Dialog.Title title="Add task"/>
      <View>
        <Divider />
        <TaskEdit taskInit={task} editHandlers={setTask}  verticalButtons={true}/>
      </View>
      <Dialog.Actions>
        <Dialog.Button
          title="Confirm"
          onPress={() => {
            data.createTask({
              id: data.getNewID(),
              name: task.name,
              description: task.description,
              priority: task.priority,
              isDone: false
            });
            setTask({
              id: 0,
              name: '',
              description: '',
              priority: 0,
              isDone: false
            });
            toggle();
          }}
        />
        <Dialog.Button title="Cancel" onPress={toggle} />
      </Dialog.Actions>
    </Dialog>
  );
};


export default AddTask;
