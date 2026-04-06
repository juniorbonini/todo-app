import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
