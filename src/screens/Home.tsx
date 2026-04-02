import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { useState } from "react";
import { FlatList, Keyboard, Pressable, View } from "react-native";

import { Container } from "@/components/Container";
import { Empty } from "@/components/Empty";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import { TasksCounter } from "@/components/Summary";
import { TaskItem } from "@/components/Task";
import { Task } from "@/interfaces/task";
import { styles } from "@/style/style";
import { TasksTypes } from "@/utils/TasksTypes";

export function Home() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });
  const [task, setTask] = useState<Task[]>([]);

  if (!fontsLoaded) {
    return <Loading />;
  }

  function onAddTask(description: string) {
    const newTask: Task = {
      id: Date.now().toString(),
      description,
      isCompleted: false,
    };
    setTask((prev) => [...prev, newTask]);
  }

  function toggleTask(id: string) {
    setTask((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }

  function removeTask(id: string) {
    setTask((prevState) => prevState.filter((task) => task.id !== id));
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.screen}>
      <Header />
      <Container>
        <Form addTask={onAddTask} />
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
      </Container>
    </Pressable>
  );
}
