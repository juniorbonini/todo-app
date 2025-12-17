import { Color } from "@/style/Color";
import { fontFamily } from "@/style/Fontfamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 247,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    color: Color.gray[300],
    marginTop: 16,
  },
  text: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: Color.gray[300],
  },
});
