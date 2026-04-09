import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.gray[700],
    paddingTop: 50,
    gap: 16,
    borderBottomWidth: 1,
    paddingVertical: 16,
    borderBottomColor: "rgba(255,255,255,0.1)",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  avatarWrapper: {
    position: "relative",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 125,
  },

  lvlBadge: {
    position: "absolute",
    bottom: -0.5,
    right: 6,
    backgroundColor: Color.gray[600],
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderWidth: 1,
    borderColor: Color.purple["purple-dark"],
  },
  lvlText: {
    color: Color.purple["purple-light"],
    fontSize: 10,
    fontWeight: "700",
  },

  greetingBlock: {
    flex: 1,
    gap: 4,
  },
  hello: {
    color: Color.gray[300],
    fontSize: 12,
  },
  name: {
    color: Color.gray[100],
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 22,
  },
  xpRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 2,
  },
  xpBarTrack: {
    flex: 1,
    height: 4,
    backgroundColor: Color.gray[500],
    borderRadius: 2,
    overflow: "hidden",
  },
  xpBar: {
    height: "100%",
    borderRadius: 2,
  },
  xpLabel: {
    color: Color.gray[300],
    fontSize: 10,
    fontWeight: "600",
    minWidth: 52,
    textAlign: "right",
  },

  actions: {
    alignItems: "center",
    gap: 8,
    marginBottom: 25,
  },

  streakBadge: {
    backgroundColor: "rgba(239,159,39,0.15)",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: "rgba(239,159,39,0.3)",
    maxWidth: 180,
    marginTop: 16,
  },

  streakContainer: {
    marginInline: "auto",
  },
  streakText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#EF9F27",
  },
  logoutButton: {
    padding: 4,
  },
});
