import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.gray[600],
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderWidth: 1,
    gap: 6,
    borderColor: Color.gray[500],
  },
  input: {
    flex: 1,
    color: Color.gray[100],
    fontSize: 15,
  },
  errorText: {
    color: Color.red["red-dark"],
    fontSize: 12,
    marginTop: 4,
    marginLeft: 2,
  },
});
