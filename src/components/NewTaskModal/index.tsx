import { Color } from "@/style/Color";
import { ApiErrorResponse } from "@/utils/AxiosErrorInterface/axios-error.props";
import { AxiosError } from "axios";
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
    try {
      await onAdd(description.trim());
      setDescription("");
      onClose();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const response = error.response?.data as ApiErrorResponse | undefined;

        if (response?.message) {
          Alert.alert(response.message);
        }
      }
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
