import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: "hidden",
  },
  fillWrapper: {
    borderRadius: 16,
  },
  gradient: {
    paddingVertical: 14,
    paddingHorizontal: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  outline: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Color.blue["blue-dark"],
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  label: {
    fontSize: 16,
    letterSpacing: 0.4,
    fontWeight: "700",
  },
  fillLabel: {
    color: Color.gray[100],
  },
  outlineLabel: {
    color: Color.blue["blue-dark"],
  },
});
