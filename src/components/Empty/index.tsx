import { Text, View } from "react-native";

import { styles } from "./style";
import { Color } from "@/style/Color";
import { Icon } from "@/components/Icon";

export function Empty() {
  return (
    <View style={styles.container}>
      <Icon name="assignment-add" size={90} color={Color.gray[400]} />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
