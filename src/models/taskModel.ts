export default interface ITaskModel {
  id: string | number[];
  name: string;
  description: string;
  priority: number;
  isDone: boolean;
}
