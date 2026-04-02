import { Task } from "@/interfaces/task";
import { useState } from "react";

export function useTasks() {
  const [task, setTask] = useState<Task[]>([]);

  function onAddTask(description: string) {
    const newTask: Task = {
      id: Date.now().toString(),
      description,
      isCompleted: false,
    };
    setTask((prev) => [...prev, newTask]);
  }

  function toggleTask(id: string) {
    setTask((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }

  function removeTask(id: string) {
    setTask((prevState) => prevState.filter((task) => task.id !== id));
  }
  return { task, onAddTask, toggleTask, removeTask };
}
