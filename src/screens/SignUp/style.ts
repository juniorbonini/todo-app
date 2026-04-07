import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#111111",
  },
  hero: {
    alignItems: "center",
    paddingTop: 72,
    paddingBottom: 32,
    paddingHorizontal: 24,
  },
  logoWrapper: {
    width: 64,
    height: 64,
    borderRadius: 18,
    backgroundColor: Color.blue["blue-dark"],
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logo: {
    width: 36,
    height: 36,
    resizeMode: "contain",
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
    marginHorizontal: 24,
    backgroundColor: Color.gray[500],
    borderRadius: 12,
    padding: 4,
    marginBottom: 32,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  tabActive: {
    backgroundColor: Color.blue["blue-dark"],
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
    paddingHorizontal: 24,
    gap: 20,
    marginBottom: 32,
  },
  fieldGroup: {
    gap: 8,
  },
  label: {
    fontSize: 11,
    fontWeight: "700",
    color: Color.gray[300],
    letterSpacing: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.gray[500],
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    gap: 10,
    borderWidth: 1,
    borderColor: "transparent",
  },
  ageHint: {
    fontSize: 12,
    color: Color.blue["blue-dark"],
    fontWeight: "600",
    marginLeft: 2,
  },
  ctaContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  gradientButton: {
    borderRadius: 14,
    overflow: "hidden",
  },
});
