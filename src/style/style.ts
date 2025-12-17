import { StyleSheet } from "react-native";
import { Color } from "./Color";
import { fontFamily } from "./Fontfamily";

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
  contentContainer: {
    flexDirection: "row",
    gap: 5,
    padding: 12,
    marginTop: -35,
    justifyContent: 'center'
  },
    input: {
      width: 271,
      padding: 16,
      fontFamily: fontFamily.regular,
      color: "white",
      backgroundColor: Color.gray[500],
      borderRadius: 8,
      borderWidth: 1,
    },
});
