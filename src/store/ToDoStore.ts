import {makeAutoObservable} from "mobx";
import uuid from 'react-native-uuid';
import ITaskModel from "../models/taskModel";
import storage from "../storage/offlineStorage";

class ToDoStore {
  todos: ITaskModel[] = [];

  constructor() {
    const keys = storage.getAllKeys();

    for (const key of keys) {
      let task = storage.getString(key);

      if (task !== undefined) {
        this.todos.push(JSON.parse(task));
      }
    }

    makeAutoObservable(this);
  }

  createTask(task: ITaskModel) {
    const newTask = {
      ...task,
      id: this.getNewID(),
      isDone: false
    };

    this.todos.push(newTask);
    storage.set(newTask.id, JSON.stringify(newTask));
  }

  deleteTask(id: string) {
    const founded = this.todos.findIndex((elem) => elem.id === id);

    if (founded !== undefined) {
      this.todos.splice(founded, 1);
      storage.delete(id);
    }
  }

  getNewID(): string {
    let newID = uuid.v4();

    while(typeof newID !== "string") {
      newID = uuid.v4();
    }

    return newID;
  }

  toggleTask(id: string) {
    const found = this.todos.find(task => task.id === id);

    if (found !== undefined) {
      found.isDone = !(found.isDone);
      storage.set(id, JSON.stringify(found));
    }
  }

  editTask(newTask: ITaskModel) {
    const idx = this.todos.findIndex(task => task.id === newTask.id);

    if (idx !== undefined) {
      this.todos[idx] = newTask;
    }

    storage.set(newTask.id, JSON.stringify(newTask));
  }
}

export default new ToDoStore();
