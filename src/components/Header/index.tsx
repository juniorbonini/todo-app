import { Color } from "@/style/Color";
import { Gradients } from "@/utils/gradient-linear";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { HeaderProps } from "./header-props";
import { styles } from "./style";
import { useAuthContext } from "@/contexts/AuthContext/auth-context";

const logoImage = require("../../assets/ascending-logo.png");

export function Header({
  onNewTask,
  xp = 70,
  xpMax = 100,
  level = 2,
  streak = 2,
}: HeaderProps) {
  const { user, signOut } = useAuthContext();

  const firstName = user?.name?.split(" ")[0] ?? "Usuário";
  const xpPercent = Math.min((xp / xpMax) * 100, 100);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={logoImage} style={styles.image} />
        </View>
        <View style={styles.row}>
          <View style={styles.lvlBadge}>
            <Text style={styles.lvlText}>{level}</Text>
          </View>

          <View style={styles.greetingBlock}>
            <Text style={styles.hello}>Olá,</Text>
            <Text style={styles.name}>{firstName}</Text>

            <View style={styles.xpRow}>
              <View style={styles.xpBarTrack}>
                <LinearGradient
                  {...Gradients.primary}
                  style={[styles.xpBar, { width: `${xpPercent}%` }]}
                />
              </View>
              <Text style={styles.xpLabel}>
                {xp}/{xpMax} XP
              </Text>
            </View>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity
              onPress={signOut}
              style={styles.logoutButton}
              activeOpacity={0.7}
            >
              <Icon name="logout" size={18} color={Color.gray[400]} />
            </TouchableOpacity>
          </View>
        </View>
        <Button label="Nova tarefa" onPress={onNewTask} />
      </View>
      <View style={styles.streakContainer}>
        {streak > 1 && (
          <View style={styles.streakBadge}>
            <Text style={styles.streakText}>🔥 {streak} dias em sequência</Text>
          </View>
        )}
      </View>
    </>
  );
}
