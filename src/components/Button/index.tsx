import { TouchableOpacity } from "react-native";

import { ButtonProps } from "@/interfaces/button";
import { styles } from "./style";

export function Button({ onPress, children }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}
