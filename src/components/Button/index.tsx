import { Text, TouchableOpacity } from "react-native";

import { ButtonProps } from "@/interfaces/button";
import { styles } from "./style";

interface ButtonOutlineProps {
  borderWidth: number;
  borderColor: string;
  color: string;
}

export function Button({
  onPress,
  children,
  mode = "fill",
  label,
}: ButtonProps) {
  const isFill = mode === "fill";

  return (
    <TouchableOpacity
      style={[styles.container, isFill ? styles.fill : styles.outline]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {label ? (
        <Text
          style={[
            styles.label,
            isFill ? styles.fillLabel : styles.outlineLabel,
          ]}
        >
          {label}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
