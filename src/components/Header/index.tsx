import { Image, View } from "react-native";
import { styles } from "./style";

const logoImage = require("../../assets/todo-logo.png");

export function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image source={logoImage} style={styles.logoImage} />
    </View>
  );
}
