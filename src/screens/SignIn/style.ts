import { Color } from "@/style/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.gray[600],
    paddingHorizontal: 24,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
    marginBottom: 50,
    paddingTop: 100,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    gap: 20,
  },
  registerContainer: {
    flexDirection: "column",
    gap: 5,
    marginBottom: 35,
  },
  text: {
    color: Color.gray[300],
    fontWeight: "bold",
    fontSize: 12,
    textDecorationLine: "underline",
  },
  logoContainer: {
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 48,
  },
  image: {
    width: 110,
    height: 32,
    backgroundColor: "transparent",
  },
});
