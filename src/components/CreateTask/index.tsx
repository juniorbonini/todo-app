import { FormProps } from "@/interfaces/form";
import { Color } from "@/style/Color";
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
      <Button iconName="add" onPress={handleAdd} />
    </View>
  );
}
