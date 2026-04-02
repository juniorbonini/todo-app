import { StyleSheet } from "react-native";

import { Color } from "@/style/Color";
import { fontFamily } from "@/style/Fontfamily";

export const styles = StyleSheet.create({
  input: {
    width: 271,
    padding: 16,
    fontFamily: fontFamily.regular,
    color: "white",
    backgroundColor: Color.gray[500],
    borderRadius: 8,
    borderWidth: 1,
  },
  container: {
    height: 54,
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
});
