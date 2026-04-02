import { TextInputProps } from "react-native";

export interface FormProps extends TextInputProps {
  addTask: (description: string) => void;
}
