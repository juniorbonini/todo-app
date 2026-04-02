import { StyleSheet } from "react-native";

import { Color } from "@/style/Color";
import { fontFamily } from "@/style/Fontfamily";

export const styles = StyleSheet.create({
  input: {
    width: 271,
    padding: 16,
    fontFamily: fontFamily.regular,
    backgroundColor: Color.gray[500],
    borderRadius: 8,
    borderWidth: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    transform: [{ translateY: -25 }],
    gap: 8,
  },
});
