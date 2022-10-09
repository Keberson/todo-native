import {makeAutoObservable} from "mobx";
import uuid from 'react-native-uuid';
import ITaskModel from "../models/taskModel";

class ToDoStore {
  todos: ITaskModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  createTask(task: ITaskModel) {
    this.todos.push(task);
  }

  deleteTask(id: string | number[]) {
    const founded = this.todos.findIndex((elem) => elem.id === id);

    if (founded !== undefined) {
      this.todos.splice(founded, 1);
    }
  }

  getNewID(): string | number[] {
    return uuid.v4();
  }

  toggleTask(id: string | number[]) {
    const found = this.todos.find(task => task.id === id);

    if (found !== undefined) {
      found.isDone = !(found.isDone);
    }
  }

  editTask(newTask: ITaskModel) {
    const idx = this.todos.findIndex(task => task.id === newTask.id);

    if (idx !== undefined) {
      this.todos[idx] = newTask;
    }
  }
}

export default new ToDoStore();