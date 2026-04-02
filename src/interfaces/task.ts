export interface TaskSummaryProps {
  tasks: Task[];
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
