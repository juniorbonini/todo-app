import { Gradients } from "@/utils/gradient-linear";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { TabSwitcherProps } from "./tab-swithcer.props";

export function TabSwitcher({ activeTab, onChange }: TabSwitcherProps) {
  return (
    <View style={styles.tabContainer}>
      <Pressable onPress={() => onChange("login")} style={styles.tab}>
        {activeTab === "login" ? (
          <LinearGradient {...Gradients.primary} style={styles.tabActive}>
            <Text style={[styles.tabText, styles.tabTextActive]}>Login</Text>
          </LinearGradient>
        ) : (
          <Text style={styles.tabText}>Login</Text>
        )}
      </Pressable>

      <Pressable onPress={() => onChange("register")} style={styles.tab}>
        {activeTab === "register" ? (
          <LinearGradient {...Gradients.primary} style={styles.tabActive}>
            <Text style={[styles.tabText, styles.tabTextActive]}>Registro</Text>
          </LinearGradient>
        ) : (
          <Text style={styles.tabText}>Registro</Text>
        )}
      </Pressable>
    </View>
  );
}
