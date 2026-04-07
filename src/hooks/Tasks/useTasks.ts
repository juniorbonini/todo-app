import { Task } from "@/interfaces/task";
import { useState } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function onAddTask(description: string) {
    const newTask: Task = {
      id: Date.now().toString(),
      description,
      isCompleted: false,
    };
    setTasks((prev) => [...prev, newTask]);
  }

  function toggleTask(id: string) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }

  function removeTask(id: string) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }
  return { tasks, onAddTask, toggleTask, removeTask };
}
