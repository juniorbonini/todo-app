import { TasksTypes } from "@/utils/TasksTypes";
import { MaterialIcons } from "@expo/vector-icons"

export type ButtonProps = {
    iconName: keyof typeof MaterialIcons.glyphMap;
    onPress: () => void;
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

export type TaskProps = {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export type EmptyProps = {
    iconName: keyof typeof MaterialIcons.glyphMap;
}