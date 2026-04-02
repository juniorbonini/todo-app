import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { TaskProps } from "@/interfaces/task";
import { Color } from "@/style/Color";
import { styles } from "./style";

export function TaskItem({ task, onToggle, onDelete }: TaskProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.circle,
          task.isCompleted && { backgroundColor: Color.purple["purple-dark"] },
        ]}
        onPress={() => onToggle(task.id)}
        accessibilityLabel={`Marcar tarefa ${task.description}`}
      >
        {task.isCompleted && (
          <MaterialIcons name="check" size={16} color={Color.gray[100]} />
        )}
      </Pressable>

      <Text
        style={[
          styles.description,
          task.isCompleted && styles.descriptionCompleted,
        ]}
      >
        {task.description}
      </Text>

      <Pressable
        style={styles.trash}
        onPress={() => onDelete(task.id)}
        accessibilityLabel={`Remover tarefa ${task.description}`}
      >
        <MaterialIcons
          name="delete-forever"
          size={26}
          color={Color.gray[300]}
        />
      </Pressable>
    </View>
  );
}
