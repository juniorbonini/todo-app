import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Loading } from "@/components/Loading";
import { Color } from "@/style/Color";
import { styles } from "@/style/style";
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { useState } from "react";
import { Image, Keyboard, Pressable, View } from "react-native";

const logoImage = require("../assets/todo-logo.png");

export function Home() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });
  const [isFocused, setIsFocused] = useState(false);

  if (!fontsLoaded) {
    return <Loading />;
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={logoImage} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          style={[styles.input, { borderColor: isFocused ? Color.blue["blue-dark"] : Color.gray[700] }]}
        />
        <Button iconName="add" />
      </View>
    </Pressable>
  );
}
