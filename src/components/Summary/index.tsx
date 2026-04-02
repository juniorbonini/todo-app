import { Text, View } from "react-native";

import { TaskSummaryProps } from "@/interfaces/task";
import { styles } from "./style";

export function TaskSummary({ tasks }: TaskSummaryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <Text style={[styles.counterText, styles.created]}>Criadas</Text>
        <View style={styles.counterBadge}>
          <Text style={styles.value}>{tasks.length}</Text>
        </View>
      </View>

      <View style={styles.counter}>
        <Text style={[styles.counterText, styles.completed]}>Concluídas</Text>
        <View style={styles.counterBadge}>
          <Text style={styles.value}>
            {tasks.filter((t) => t.isCompleted).length}
          </Text>
        </View>
      </View>
    </View>
  );
}
