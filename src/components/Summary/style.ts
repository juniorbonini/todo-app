import { Color } from "@/style/Color";
import { fontFamily } from "@/style/Fontfamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    gap: 10,
  },
  created: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    color: Color.blue["blue-dark"],
  },
  completed: {
    flexDirection: "row",
    alignItems: "center",
    color: Color.purple["purple-dark"],
    gap: 6,
  },
  counterText: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
  },
  counterBadge: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 36,
  },
  value: {
    color: Color.gray[200],
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
});
