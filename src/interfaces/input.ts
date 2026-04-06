import { ReactNode } from "react";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";

export interface InputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  icon?: ReactNode;
  error?: string;
}
