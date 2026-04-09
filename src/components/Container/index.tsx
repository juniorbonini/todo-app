import { View } from "react-native";

import { ContainerProps } from "@/components/Container/container-props";
import { styles } from "./style";

export function Container({ children }: ContainerProps) {
  return <View style={styles.contentContainer}>{children}</View>;
}
