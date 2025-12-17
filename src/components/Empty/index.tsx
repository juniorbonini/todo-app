import { EmptyProps } from "@/@types/types";
import { Color } from "@/style/Color";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./style";

export function Empty({ iconName }: EmptyProps) {
  return (
    <View style={styles.container}>
      <MaterialIcons name={iconName} size={90} color={Color.gray[400]} />
      <Text style={styles.title} >Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}
