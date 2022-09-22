import {makeAutoObservable} from "mobx";
import ITaskModel from "../models/taskModel";

class ToDo {
  todos: ITaskModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  createTask(task: ITaskModel) {
    this.todos.push(task);
  }

  deleteTask(id: number) {
    console.log('delete')
    this.todos = this.todos.filter(task => task.id !== id);
    console.log(this.todos)
  }

  getNewID(): number {
    return this.todos.length + 1;
  }

  toggleTask(id: number) {
    const found: ITaskModel | undefined = this.todos.find(task => task.id === id);
    found!.isDone = !(found!.isDone);
  }

  editTask(newTask: ITaskModel) {
    const found: ITaskModel | undefined = this.todos.find(task => task.id === newTask.id);

    if (found) {
      Object.assign(found, newTask);
    }
  }
}

export default new ToDo();