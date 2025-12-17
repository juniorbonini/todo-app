import { Loading } from "@/components/Loading";
import { styles } from "@/style/style";
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Image, View } from "react-native";

const logoImage = require("../assets/todo-logo.png");

export function Home() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={logoImage} style={styles.image} />
      </View>
    </View>
  );
}
