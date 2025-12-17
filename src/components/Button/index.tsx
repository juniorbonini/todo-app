import { ButtonProps } from "@/@types/types";
import { Color } from "@/style/Color";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { styles } from "./style";

export function Button({ iconName }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={.7}>
            <MaterialIcons name={iconName} size={24} color={Color.gray[100]}  />
        </TouchableOpacity>
    )
}