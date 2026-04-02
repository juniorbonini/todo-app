import { Text, View } from "react-native";

import { TaskCounterProps } from "@/interfaces/task";
import { TasksTypes } from "@/utils/TasksTypes";
import { styles } from "./style";

export function TasksCounter({ type, value }: TaskCounterProps) {
  const isCreated = type === TasksTypes.Created;

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.counterText,
          isCreated ? styles.created : styles.completed,
        ]}
      >
        {isCreated ? "Criadas" : "Concluídas"}
      </Text>
      <View style={styles.counterBadge}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}
