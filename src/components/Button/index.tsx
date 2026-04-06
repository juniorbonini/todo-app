import { Text, TouchableOpacity } from "react-native";

import { ButtonProps } from "@/interfaces/button";
import { Color } from "@/style/Color";
import { LinearGradient } from "expo-linear-gradient";
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
      style={[styles.container, isFill ? styles.fillWrapper : styles.outline]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {isFill ? (
        <LinearGradient
          colors={[
            Color.blue["blue-gradient"],
            Color.purple["purple-gradient"],
            Color.purple["purple-gradient-dark"],
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          {label ? (
            <Text style={[styles.label, styles.fillLabel]}>{label}</Text>
          ) : (
            children
          )}
        </LinearGradient>
      ) : label ? (
        <Text style={[styles.label, styles.outlineLabel]}>{label}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
