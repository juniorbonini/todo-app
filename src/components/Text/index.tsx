import { TextProps } from "@/interfaces/text";
import { Text } from "react-native";
import { styles } from "./style";

export function TextComponent({ children, mode = "fill" }: TextProps) {
  const isFill = mode === "fill";
  return (
    <>
      <Text style={isFill ? styles.fill : styles.outline}>{children}</Text>
    </>
  );
}
