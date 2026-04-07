import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { InputProps } from "@/components/Input/input-props";
import { Color } from "@/style/Color";
import { useState } from "react";
import { Icon } from "../Icon";
import { styles } from "./style";

export function Input({
  secureTextEntry,
  label,
  icon,
  error,
  showPassworToggle,
  ...rest
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isSecure = secureTextEntry && !isPasswordVisible;
  return (
    <View style={styles.wrapper}>
      {label && (
        <Text style={[styles.label, error && styles.labelError]}>{label}</Text>
      )}
      <View
        style={[styles.inputContainer, error && styles.inputContainerError]}
      >
        {icon && (
          <Icon
            name={icon}
            color={error ? Color.red["red-dark"] : Color.gray[300]}
          />
        )}
        <TextInput
          placeholderTextColor={Color.gray[300]}
          style={styles.input}
          secureTextEntry={isSecure}
          {...rest}
        />
        {showPassworToggle && secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible((prev) => !prev)}
            activeOpacity={0.7}
          >
            <Icon name={isPasswordVisible ? "visibility" : "visibility-off"} />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
