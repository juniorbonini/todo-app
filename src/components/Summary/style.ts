import { Color } from "@/style/Color";
import { fontFamily } from "@/style/Fontfamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 15,
    gap: 8,
  },
  counterText: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
  },
  created: {
    color: Color.blue["blue-dark"],
  },
  completed: {
    color: Color.purple["purple-dark"],
  },
  counterBadge: {
    backgroundColor: Color.gray[400],
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    
  },
  value: {
    color: Color.gray[200],
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
});
