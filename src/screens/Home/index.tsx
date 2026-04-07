import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { FlatList } from "react-native";

import { Container } from "@/components/Container";
import { CreateTask } from "@/components/CreateTask";
import { Empty } from "@/components/Empty";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import { TaskSummary } from "@/components/Summary";
import { TaskItem } from "@/components/Task";
import { useTasks } from "@/hooks/Tasks/useTasks";

export function Home() {
  const { tasks, onAddTask, removeTask, toggleTask } = useTasks();
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
        <CreateTask addTask={onAddTask} />
        <TaskSummary tasksSummary={tasks} />
        <FlatList
          data={tasks}
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
