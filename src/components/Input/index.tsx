import { TextInput, View } from "react-native";

import { InputProps } from "@/interfaces/input";
import { Color } from "@/style/Color";
import { styles } from "./style";

export function Input({ containerStyle, ...rest }: InputProps) {
  return (
    <View style={[containerStyle]}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={Color.gray[300]}
        style={styles.input}
        {...rest}
      />
    </View>
  );
}
