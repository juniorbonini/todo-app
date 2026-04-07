import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  hero: {
    alignItems: "center",
    paddingTop: 62,
    paddingBottom: 32,
  },
  logoWrapper: {
    width: 74,
    height: 74,
    borderRadius: 18,
    backgroundColor: Color.blue["blue-dark"],
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
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

  tabContainer: {
    flexDirection: "row",
    backgroundColor: Color.gray[500],
    borderRadius: 12,
    padding: 4,
    marginBottom: 32,
  },
  tab: {
    flex: 1,
    paddingVertical: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  tabActive: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: Color.gray[300],
  },
  tabTextActive: {
    color: Color.gray[100],
  },

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
