import { ContainerProps } from "@/interfaces/container";
import { View } from "react-native";
import { styles } from "./style";

export function Container({ children }: ContainerProps) {
  return (
    <>
      <View style={styles.container}></View>
      <View style={styles.contentContainer}>{children}</View>
    </>
  );
}
