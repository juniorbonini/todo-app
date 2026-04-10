import { Text, View } from "react-native";

import { TaskSummaryProps } from "@/components/Task/task";
import { Color } from "@/style/Color";
import { Gradients } from "@/utils/gradient-linear";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";

export function TaskSummary({ tasksSummary }: TaskSummaryProps) {
  return (
    <View style={styles.counter}>
      <View style={styles.created}>
        <Text style={[styles.counterText, styles.created]}>Criadas</Text>
        <LinearGradient {...Gradients.primary} style={styles.counterBadge}>
          <Text style={styles.value}>{tasksSummary.length}</Text>
        </LinearGradient>
      </View>
      <View style={styles.completed}>
        <Text style={[styles.counterText, styles.completed]}>Concluídas</Text>
        <LinearGradient
          colors={[Color.blue["blue-light"], Color.purple["purple-light"]]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.counterBadge}
        >
          <Text style={styles.value}>
            {tasksSummary.filter((t) => t.isCompleted).length}
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
}
