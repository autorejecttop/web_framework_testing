export interface Task {
  id: number;
  text: string;
  done: boolean;
}

interface AddTaskAction {
  type: "added";
  id: number;
  text: string;
}

interface ChangeTaskAction {
  type: "changed";
  task: Task;
}

interface DeleteTaskAction {
  type: "deleted";
  id: number;
}

export type TaskActions = AddTaskAction | ChangeTaskAction | DeleteTaskAction;
