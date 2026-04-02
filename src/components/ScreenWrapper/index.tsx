import { ScreenWrapperProps } from "@/interfaces/screenWrapper";
import { Keyboard, Pressable } from "react-native";
import { styles } from "./style";

export function ScreenWrapper({ children }: ScreenWrapperProps) {
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      {children}
    </Pressable>
  );
}
