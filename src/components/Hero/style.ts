import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  hero: {
    alignItems: "center",
    paddingTop: 62,
    paddingBottom: 32,
  },
  logo: {
    width: 112,
    height: 112,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: Color.gray[100],
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: Color.gray[300],
  },
});
