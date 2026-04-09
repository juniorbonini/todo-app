import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    gap: 20,
    marginBottom: 32,
  },
  forgotWrapper: {
    alignSelf: "flex-end",
  },
  forgotText: {
    fontSize: 13,
    color: Color.blue["blue-dark"],
    fontWeight: "600",
    paddingHorizontal: 26,
  },

  ctaContainer: {
    flexDirection: "column",
    gap: 122,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  gradientButton: {
    borderRadius: 14,
    overflow: "hidden",
  },
  registerContainer: {
    flexDirection: "column",
    gap: 8,
  },
  textRegister: {
    fontSize: 13,
    color: Color.purple["purple-dark"],
    textDecorationLine: "underline",
  },
});
