import { Text, TextInput, View } from "react-native";

import { InputProps } from "@/interfaces/input";
import { Color } from "@/style/Color";
import { styles } from "./style";

export function Input({ containerStyle, icon, error, ...rest }: InputProps) {
  return (
    <View style={[containerStyle]}>
      <View
        style={[
          containerStyle,
          error ? { borderColor: Color.red["red-dark"], borderWidth: 1 } : {},
        ]}
      >
        {icon && icon}
        <TextInput
          placeholderTextColor={Color.gray[300]}
          style={styles.input}
          {...rest}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
