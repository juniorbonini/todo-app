import { FormProps } from "@/components/CreateTask/create-task-props";
import { Color } from "@/style/Color";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, View } from "react-native";
import { Button } from "../Button";
import { Input } from "../Input";
import { styles } from "./style";

export function CreateTask({ addTask }: FormProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [description, setDescription] = useState("");

  function handleAdd() {
    const trimmed = description.trim();
    if (!trimmed) {
      Alert.alert("Insira o nome da tarefa");
      return;
    }
    addTask(trimmed);
    setDescription("");
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <View style={styles.container}>
      <Input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={description}
        onChangeText={setDescription}
        containerStyle={[
          {
            borderColor: isFocused ? Color.blue["blue-dark"] : Color.gray[700],
          },
        ]}
      />
      <Button onPress={handleAdd}>
        <MaterialIcons name="add" size={24} color={Color.gray[100]} />
      </Button>
    </View>
  );
}
