import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Color.gray[600],
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    marginBottom: 12,
    marginTop: 8,
    borderWidth: 1,
    borderColor: Color.gray[500],
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: Color.blue["blue-dark"],
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  description: {
    color: Color.gray[300],
    fontSize: 15,
    flex: 1,
  },

  descriptionCompleted: {
    textDecorationLine: "line-through",
    color: Color.gray[400],
  },
  trash: {
    marginLeft: 12,
    padding: 6,
  },
});
