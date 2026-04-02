import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { FlatList, View } from "react-native";

import { Container } from "@/components/Container";
import { Empty } from "@/components/Empty";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import { TasksCounter } from "@/components/Summary";
import { TaskItem } from "@/components/Task";
import { useTasks } from "@/hooks/useTasks";
import { styles } from "@/style/style";
import { TasksTypes } from "@/utils/TasksTypes";

export function Home() {
  const { task, onAddTask, removeTask, toggleTask } = useTasks();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
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

        <FlatList
          data={task}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem task={item} onToggle={toggleTask} onDelete={removeTask} />
          )}
          ListEmptyComponent={<Empty iconName="assignment-add" />}
        />
      </Container>
    </>
  );
}
