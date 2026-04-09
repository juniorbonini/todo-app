import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: Color.gray[600],
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 12,
    gap: 20,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: Color.gray[400],
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: Color.gray[100],
    fontSize: 18,
    fontWeight: "700",
  },
  gradientButton: {
    borderRadius: 14,
    overflow: "hidden",
  },
});
