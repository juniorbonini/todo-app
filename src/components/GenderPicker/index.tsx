import { GenderPickerProps } from "@/components/GenderPicker/gender-picker-props";
import { Color } from "@/style/Color";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

const GENDER_OPTIONS = [
  "Masculino",
  "Feminino",
  "Nåo-binário",
  "Gênero fluido",
  "Agênero",
  "Bigênero",
  "Pangênero",
  "Prefiro não informar",
];

export function GenderPicker({ error, value, onChange }: GenderPickerProps) {
  const [visible, setVisible] = useState(false);

  function handleSelect(option: string) {
    onChange(option);
    setVisible(false);
  }
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.trigger,
          error ? { borderColor: Color.red["red-dark"], borderWidth: 1 } : {},
        ]}
        onPress={() => setVisible(true)}
        activeOpacity={0.7}
      >
        <MaterialIcons
          name="people-outline"
          size={18}
          color={Color.gray[300]}
        />
        <Text style={[styles.triggerText, !value && styles.placeholder]}>
          {value || "Selecione o gênero"}
        </Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={20}
          color={Color.gray[300]}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
      </TouchableOpacity>

      <Modal visible={visible} transparent animationType="fade">
        <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
          <Pressable style={styles.modal} onPress={(e) => e.stopPropagation()}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Selecione o gênero</Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <MaterialIcons name="close" size={22} color={Color.gray[300]} />
              </TouchableOpacity>
            </View>
            {GENDER_OPTIONS.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.option,
                  value === option && styles.optionSelected,
                ]}
                onPress={() => handleSelect(option)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.optionText,
                    value === option && styles.optionTextSelected,
                  ]}
                >
                  {option}
                </Text>
                <MaterialIcons
                  name="check"
                  size={18}
                  color={Color.blue["blue-dark"]}
                />
              </TouchableOpacity>
            ))}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
