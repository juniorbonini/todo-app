import { Task } from "@/components/Task/task";
import { api } from "@/services/api";
import { ApiSuccessResponse } from "@/utils/AxiosErrorInterface/api-success-response";
import { useEffect, useState } from "react";

interface ApiTask {
  _id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function mapTask(task: ApiTask): Task {
    return {
      id: task._id,
      description: task.description || task.title,
      isCompleted: task.isCompleted,
    };
  }

  useEffect(() => {
    async function loadTasks() {
      const response = await api.get<ApiSuccessResponse<{ tasks: ApiTask[] }>>(
        "tasks",
      );
      setTasks(response.data.data.tasks.map(mapTask));
    }

    loadTasks();
  }, []);

  async function onAddTask(description: string) {
    const response = await api.post<ApiSuccessResponse<{ task: ApiTask }>>(
      "tasks",
      {
        title: description,
        description,
      },
    );

    setTasks((prev) => [...prev, mapTask(response.data.data.task)]);
  }

  async function toggleTask(id: string) {
    const response = await api.patch<ApiSuccessResponse<{ task: ApiTask }>>(
      `tasks/${id}/toggle`,
    );

    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? mapTask(response.data.data.task) : task,
      ),
    );
  }

  async function removeTask(id: string) {
    await api.delete(`tasks/${id}`);

    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  return { tasks, onAddTask, toggleTask, removeTask };
}
