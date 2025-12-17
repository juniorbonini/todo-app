import { Loading } from "@/components/Loading";
import { Inter_400Regular, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import { Text, View } from "react-native";

export function Home() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if(!fontsLoaded) {
    return <Loading />
  }
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
