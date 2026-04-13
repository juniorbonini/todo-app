import { Color } from "@/style/Color";
import { useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Input } from "../Input";
import { NewTaskModalProps } from "./new-task-modal-props";
import { styles } from "./style";

export function NewTaskModal({ visible, onClose, onAdd }: NewTaskModalProps) {
  const [description, setDescription] = useState("");

  async function handleAdd() {
    const trimmed = description.trim();
    if (!trimmed) {
      Alert.alert("Insira o nome da tarefa");
      return;
    }

    try {
      await onAdd(trimmed);
      setDescription("");
      onClose();
    } catch {
      Alert.alert("Erro ao criar tarefa", "Nao foi possivel salvar a tarefa.");
    }
  }

  function handleClose() {
    setDescription("");
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType="slide">
      <Pressable style={styles.overlay} onPress={handleClose}>
        <Pressable style={styles.modal} onPress={(e) => e.stopPropagation()}>
          <View style={styles.handle} />
          <View style={styles.header}>
            <Text style={styles.title}>Nova Tarefa</Text>
            <TouchableOpacity onPress={handleClose} activeOpacity={0.7}>
              <Icon name="close" size={22} color={Color.gray[300]} />
            </TouchableOpacity>
          </View>
          <Input
            label="DESCRIÇÃO"
            placeholder="Nome da tarefa..."
            icon="edit"
            value={description}
            onChangeText={setDescription}
            autoFocus
          />
          <Button label="Adicionar tarefa" onPress={handleAdd} />
        </Pressable>
      </Pressable>
    </Modal>
  );
}
