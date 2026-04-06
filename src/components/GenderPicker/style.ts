import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  trigger: {
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
  triggerText: {
    flex: 1,
    color: Color.gray[100],
    fontSize: 15,
  },
  placeholder: {
    color: Color.gray[300],
  },
  errorText: {
    color: Color.red["red-dark"],
    fontSize: 12,
    marginTop: 4,
    marginLeft: 2,
  },

  // Modal
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: Color.gray[500],
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 8,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Color.gray[400],
    marginBottom: 8,
  },
  modalTitle: {
    color: Color.gray[100],
    fontSize: 16,
    fontWeight: "700",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: Color.gray[400],
  },
  optionSelected: {
    backgroundColor: "transparent",
  },
  optionText: {
    color: Color.gray[200],
    fontSize: 15,
  },
  optionTextSelected: {
    color: Color.blue["blue-dark"],
    fontWeight: "600",
  },
});
