import { TasksTypes } from "@/utils/TasksTypes";

export interface TaskCounterProps {
  type: TasksTypes;
  value: number;
}

export interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

export interface TaskProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}
