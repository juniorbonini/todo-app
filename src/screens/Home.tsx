import { Task } from "@/@types/types";
import { Button } from "@/components/Button";
import { Empty } from "@/components/Empty";
import { Input } from "@/components/Input";
import { Loading } from "@/components/Loading";
import { TasksCounter } from "@/components/Summary";
import { TaskItem } from "@/components/Task";
import { Color } from "@/style/Color";
import { styles } from "@/style/style";
import { TasksTypes } from "@/utils/TasksTypes";
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { useState } from "react";
import { FlatList, Image, Keyboard, Pressable, View } from "react-native";

const logoImage = require("../assets/todo-logo.png");

export function Home() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });
  const [isFocused, setIsFocused] = useState(false);
  const [task, setTask] = useState<Task[]>([]);
  const [taskDescription, setTaskDescription] = useState("");
  const addTask = (description: string) => {
    if (!description.trim()) {
      return;
    }
    const newTask: Task = {
      id: Date.now().toString(),
      description,
      isCompleted: false,
    };
    setTask((prevState) => [...prevState, newTask]);
    setTaskDescription("");
  };

  if (!fontsLoaded) {
    return <Loading />;
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  function toggleTask(id: string) {
    setTask((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  function removeTask(id: string) {
    setTask((prevState) => prevState.filter((task) => task.id !== id));
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.screen}>
      <View style={styles.headerContainer}>
        <Image source={logoImage} style={styles.image} />
      </View>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Input
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            value={taskDescription}
            onChangeText={setTaskDescription}
            style={[
              styles.input,
              {
                borderColor: isFocused
                  ? Color.blue["blue-dark"]
                  : Color.gray[700],
              },
            ]}
          />
          <Button iconName="add" onPress={() => addTask(taskDescription)} />
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
        <View></View>

        <FlatList
          data={task}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem task={item} onToggle={toggleTask} onDelete={removeTask} />
          )}
          ListEmptyComponent={<Empty iconName="assignment-add" />}
        />
      </View>
    </Pressable>
  );
}
