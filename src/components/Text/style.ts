import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fill: {
    color: Color.gray[700],
    fontWeight: "semibold",
    fontSize: 18,
    letterSpacing: 0.6,
  },

  outline: {
    color: Color.blue["blue-dark"],
    fontWeight: "semibold",
    fontSize: 18,
    letterSpacing: 0.6,
  },
});
