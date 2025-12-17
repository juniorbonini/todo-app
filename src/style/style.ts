import { StyleSheet } from "react-native";
import { Color } from "./Color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.gray[600],
  },
  headerContainer: {
    alignItems: "center",
    width: "100%",
    padding: 70,
    backgroundColor: Color.gray[700]
  },
  image: {
    width: 110,
    height: 32,
  },
});
