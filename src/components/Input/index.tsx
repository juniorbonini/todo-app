import { TextInput, TextInputProps, View } from "react-native";

import { Color } from "@/style/Color";
import { styles } from "./style";

export function Input({ ...rest }: TextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={Color.gray[300]}
        {...rest}
      />
    </View>
  );
}
