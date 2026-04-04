import { Color } from "@/style/Color";
import { fontFamily } from "@/style/Fontfamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    width: 271,
    padding: 16,
    fontFamily: fontFamily.regular,
    backgroundColor: Color.gray[500],
    borderRadius: 8,
    borderWidth: 1,
    color: Color.gray[200],
  },
});
