import { StyleSheet } from "react-native";
import { Color } from "./Color";
import { fontFamily } from "./Fontfamily";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.gray[600],
  },
  container: {
    paddingHorizontal: 24,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 173,
    backgroundColor: Color.gray[700],
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
    justifyContent: "center",
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
  counterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    borderBottomWidth: 1,
    borderColor: Color.gray[400],
  },
});
