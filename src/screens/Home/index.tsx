import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { FlatList } from "react-native";

import { Container } from "@/components/Container";
import { Empty } from "@/components/Empty";
import { CreateTask } from "@/components/CreateTask";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Loading } from "@/components/Loading";
import { TaskSummary } from "@/components/Summary";
import { TaskItem } from "@/components/Task";
import { useTasks } from "@/hooks/useTasks";

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
        <CreateTask addTask={onAddTask} />
        <TaskSummary tasks={task} />

        <Input placeholder="teste para mostrar que a cor e estilo criado do input está totalmente reservado para o component <CreateTask>" />
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
