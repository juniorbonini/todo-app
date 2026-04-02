import { Keyboard, Pressable } from "react-native";

import { ContainerProps } from "@/interfaces/container";
import { styles } from "./style";

export function Container({ children }: ContainerProps) {
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.contentContainer}>
      {children}
    </Pressable>
  );
}
