import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.gray[600],
    borderTopLeftRadius: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 26,
  },
  list: {
    paddingTop: 12,
    paddingBottom: 40,
  },
});
