import { Task } from "@/@types/types";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Loading } from "@/components/Loading";
import { TasksCounter } from "@/components/Summary";
import { Color } from "@/style/Color";
import { styles } from "@/style/style";
import { TasksTypes } from "@/utils/TasksTypes";
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
  const [task, setTask] = useState<Task[]>([]);

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
          style={[
            styles.input,
            {
              borderColor: isFocused
                ? Color.blue["blue-dark"]
                : Color.gray[700],
            },
          ]}
        />
        <Button iconName="add" />
      </View>
      <View style={styles.counterContainer}>
        <TasksCounter
          type={TasksTypes.Created}
          value={task.filter((task) => task).length}
        />
        <TasksCounter
          type={TasksTypes.Completed}
          value={task.filter((task) => task.isCompleted).length}
        />
      </View>
    </Pressable>
  );
}
