import { Text, TouchableOpacity } from "react-native";

import { ButtonProps } from "@/components/Button/button-props";
import { Gradients } from "@/utils/gradient-linear";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";

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
        <LinearGradient {...Gradients.primary} style={styles.gradient}>
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
