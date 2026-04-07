import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    gap: 6,
  },
  label: {
    fontSize: 11,
    fontWeight: "700",
    color: Color.gray[300],
    letterSpacing: 1,
  },
  labelError: {
    color: Color.red["red-dark"],
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.gray[600],
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: Color.gray[500],
    gap: 10,
  },
  inputContainerError: {
    borderColor: Color.red["red-dark"],
  },
  input: {
    flex: 1,
    color: Color.gray[100],
    fontSize: 15,
  },
  errorText: {
    color: Color.red["red-dark"],
    fontSize: 12,
    marginLeft: 2,
  },
});
