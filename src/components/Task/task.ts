export interface TaskSummaryProps {
  tasksSummary: Task[];
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
  onEdit: (id: string) => void;
}
