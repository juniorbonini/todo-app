import { TasksTypes } from "@/utils/TasksTypes";
import { MaterialIcons } from "@expo/vector-icons"

export type ButtonProps = {
    iconName: keyof typeof MaterialIcons.glyphMap;
}

export type TaskCounterProps = {
    type: TasksTypes;
    value: number;
}

export type Task = {
    id: string;
    description: string;
    isCompleted: boolean;
}