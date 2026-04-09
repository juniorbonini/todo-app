import { Image, Text, View } from "react-native";
import { HeroProps } from "./hero-props";
import { styles } from "./style";

const logoImage = require("../../assets/ascending-logo.png");

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <View style={styles.hero}>
      <View>
        <Image source={logoImage} style={styles.logo} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
