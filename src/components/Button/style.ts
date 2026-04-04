import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  outline: {
    borderWidth: 1,
    borderColor: Color.blue["blue-dark"],
    color: Color.blue["blue-dark"],
  },
  fill: {
    backgroundColor: Color.blue["blue-dark"],
    color: Color.gray[200],
  },
  label: {
    fontSize: 18,
    letterSpacing: 0.6,
  },
  fillLabel: {
    color: Color.gray[700],
  },
  outlineLabel: {
    color: Color.blue["blue-dark"],
  },
});
