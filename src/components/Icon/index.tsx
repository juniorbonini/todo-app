import { MaterialIcons } from "@expo/vector-icons";
import { IconProps } from "./icon-props";

export function Icon({ size, color, name }: IconProps) {
  return <MaterialIcons name={name} size={size} color={color} />;
}
