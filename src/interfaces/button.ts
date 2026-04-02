import { MaterialIcons } from "@expo/vector-icons";

export interface ButtonProps {
  iconName: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
}
