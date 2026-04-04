import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 54,
    backgroundColor: Color.gray[500],
    paddingHorizontal: 8,
    borderRadius: 6,
    marginBottom: 8,
    marginTop: 16,
    gap: 5,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Color.blue["blue-dark"],
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    color: Color.gray[300],
    marginLeft: 2,
    fontSize: 14,
    flex: 1,
  },

  descriptionCompleted: {
    textDecorationLine: "line-through",
  },
  trash: {
    marginLeft: 8,
    padding: 5,
  },
});
