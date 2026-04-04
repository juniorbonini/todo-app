import { ActivityIndicator } from "react-native";

import { Color } from "@/style/Color";
import { styles } from "./style";

export function Loading() {
  return <ActivityIndicator color={Color.gray[200]} style={styles.container} />;
}
