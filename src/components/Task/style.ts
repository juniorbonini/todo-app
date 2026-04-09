import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
    borderRadius: 12,
    overflow: "hidden",
  },

  // Swipe backgrounds
  swipeLeft: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "40%",
    backgroundColor: Color.red["red-dark"],
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  swipeRight: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "40%",
    backgroundColor: Color.blue["blue-dark"],
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  swipeText: {
    color: Color.gray[100],
    fontSize: 13,
    fontWeight: "600",
  },

  // Card
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.gray[500],
    borderRadius: 12,
    padding: 14,
    gap: 12,
  },

  // Circle toggle
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Color.blue["blue-dark"],
    alignItems: "center",
    justifyContent: "center",
  },
  circleCompleted: {
    borderColor: Color.purple["purple-dark"],
    backgroundColor: Color.purple["purple-dark"],
  },
  circlePulse: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  circlePulseCompleted: {
    backgroundColor: Color.purple["purple-dark"],
  },
  checkIcon: {
    alignItems: "center",
    justifyContent: "center",
  },

  // Text + strikethrough
  textWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  description: {
    color: Color.gray[100],
    fontSize: 15,
  },
  descriptionCompleted: {
    color: Color.gray[300],
  },
  strikethrough: {
    position: "absolute",
    height: 1.5,
    backgroundColor: Color.gray[300],
    top: "50%",
  },
});
