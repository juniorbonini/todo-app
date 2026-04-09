import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.gray[700],
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 24,
    gap: 20,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 28,
    resizeMode: "contain",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  logoutText: {
    color: Color.gray[300],
    fontSize: 14,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  greeting: {
    gap: 2,
  },
  greetingHello: {
    color: Color.gray[300],
    fontSize: 14,
  },
  greetingName: {
    color: Color.gray[100],
    fontSize: 22,
    fontWeight: "700",
  },
  greetingSubtitle: {
    color: Color.gray[300],
    fontSize: 13,
    marginTop: 2,
  },
  newTaskButton: {
    borderRadius: 12,
    overflow: "hidden",
  },
  newTaskButtonInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  newTaskText: {
    color: Color.gray[100],
    fontSize: 14,
    fontWeight: "600",
  },
});
