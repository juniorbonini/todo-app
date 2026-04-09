import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { styles } from "./style";
import { TaskProps } from "./task";
import { Color } from "@/style/Color";

export function TaskItem({ task, onToggle, onDelete }: TaskProps) {
  const { description, isCompleted, id } = task;

  function handleToggle() {
    onToggle(id);
  }
  function handleDelete() {
    onDelete(id);
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.circle,
          isCompleted && { backgroundColor: Color.purple["purple-dark"] },
        ]}
        onPress={handleToggle}
        accessibilityLabel={`Marcar tarefa ${description}`}
      >
        {isCompleted && (
          <MaterialIcons name="check" size={16} color={Color.gray[100]} />
        )}
      </Pressable>

      <Text
        style={[styles.description, isCompleted && styles.descriptionCompleted]}
      >
        {description}
      </Text>

      <Pressable
        style={styles.trash}
        onPress={handleDelete}
        accessibilityLabel={`Remover tarefa ${description}`}
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
