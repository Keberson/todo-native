import React, {useState} from 'react';
import {
  View
} from 'react-native';
import {
  Divider,
  Dialog,
} from "@rneui/themed";
import data from '../store/ToDoStore'
import TaskEdit from "./TaskEdit";
import ITaskModel from "../models/taskModel";

type Props = {
  visibility: boolean;
  toggle: () => void;
}

const nullTask: ITaskModel = {
  id: "",
  name: '',
  description: '',
  priority: 0,
  isDone: false
};

const AddTask = ({ visibility, toggle }: Props) => {
  const [task, setTask] = useState<ITaskModel>(nullTask);

  const onPressHandler = () => {
    data.createTask({
      id: data.getNewID(),
      name: task.name,
      description: task.description,
      priority: task.priority,
      isDone: false
    });

    setTask(nullTask);
    toggle();
  };

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
          onPress={onPressHandler}
        />
        <Dialog.Button title="Cancel" onPress={toggle} />
      </Dialog.Actions>
    </Dialog>
  );
};


export default AddTask;
