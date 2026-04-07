import { MaterialIcons } from "@expo/vector-icons";

export interface IconProps {
  name: keyof typeof MaterialIcons.glyphMap;
  size?: number;
  color?: string;
}
