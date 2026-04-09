import { Icon } from "@/components/Icon";
import { useAuthContext } from "@/contexts/AuthContext/authContext";
import { Color } from "@/style/Color";
import { Gradients } from "@/utils/gradient-linear";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { HeaderProps } from "./header-props";
import { styles } from "./style";

const logoImage = require("../../assets/todo-new.png");

export function Header({ onNewTask }: HeaderProps) {
  const { user, signOut } = useAuthContext();

  const firstName = user?.name?.split(" ")[0] ?? "Usuário";

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={logoImage} style={styles.logo} />
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={signOut}
          activeOpacity={0.7}
        >
          <Icon name="logout" size={18} color={Color.gray[300]} />
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <View style={styles.greeting}>
          <Text style={styles.greetingHello}>Olá</Text>
          <Text style={styles.greetingName}>{firstName} 👋</Text>
          <Text style={styles.greetingSubtitle}>
            O que vamos conquistar hoje?
          </Text>
        </View>
        <LinearGradient {...Gradients.primary} style={styles.newTaskButton}>
          <TouchableOpacity
            style={styles.newTaskButtonInner}
            onPress={onNewTask}
            activeOpacity={0.7}
          >
            <Icon name="add" size={20} color={Color.gray[100]} />
            <Text style={styles.newTaskText}>Nova tarefa</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
