import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    gap: 20,
    marginBottom: 32,
  },
  ageHint: {
    fontSize: 12,
    color: Color.blue["blue-dark"],
    fontWeight: "600",
    marginLeft: 2,
  },
  ctaContainer: {
    paddingBottom: 40,
  },
});
