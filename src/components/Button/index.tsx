import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { ButtonProps } from "@/interfaces/button";
import { Color } from "@/style/Color";
import { styles } from "./style";

export function Button({ iconName, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <MaterialIcons name={iconName} size={24} color={Color.gray[100]} />
    </TouchableOpacity>
  );
}
