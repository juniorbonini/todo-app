import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { FlatList, View } from "react-native";
import { Empty } from "@/components/Empty";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import { NewTaskModal } from "@/components/NewTaskModal";
import { TaskSummary } from "@/components/Summary";
import { TaskItem } from "@/components/Task";
import { useTasks } from "@/hooks/Tasks/useTasks";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { styles } from "./style";

export function Home() {
  const { tasks, onAddTask, removeTask, toggleTask } = useTasks();
  const [modalVisible, setModalVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  function handleEdit() {
    //em andamento
  }

  return (
    <GestureHandlerRootView>
      <Header onNewTask={() => setModalVisible(true)} />

      <View style={styles.content}>
        <TaskSummary tasksSummary={tasks} />
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onToggle={toggleTask}
              onDelete={removeTask}
              onEdit={handleEdit}
            />
          )}
          ListEmptyComponent={<Empty iconName="assignment-add" />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
        <NewTaskModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onAdd={onAddTask}
        />
      </View>
    </GestureHandlerRootView>
  );
}
