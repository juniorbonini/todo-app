import { StyleProp, TextInputProps, ViewStyle } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export interface InputProps extends TextInputProps {
  error?: string;
  label: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  showPassworToggle?: boolean;
}
