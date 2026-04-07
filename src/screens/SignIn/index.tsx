import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { useAuthContext } from "@/contexts/AuthContext/authContext";
import { Color } from "@/style/Color";
import { Gradients } from "@/utils/gradient-linear";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { styles } from "./style";

const logoImage = require("../../assets/todo-new.png");

type Tab = "login" | "register";

export function SignIn() {
  const { signIn } = useAuthContext();
  const [activeTab, setActiveTab] = useState<Tab>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleLogin() {
    if (!email.trim() || !password.trim())
      return Alert.alert("Informe o e-mail e senha para entrar");

    try {
      setIsSubmitting(true);
      await signIn({ email, password });
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Não foi possível conectar";
      Alert.alert("Erro no login", message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.hero}>
            <View>
              <Image source={logoImage} style={styles.logo} />
            </View>
            <Text style={styles.title}>Bem-vindo de volta</Text>
            <Text style={styles.subtitle}>Entre para continuar</Text>
          </View>

          <View style={styles.tabContainer}>
            <Pressable onPress={() => setActiveTab("login")} style={styles.tab}>
              {activeTab === "login" ? (
                <LinearGradient {...Gradients.primary} style={styles.tabActive}>
                  <Text style={[styles.tabText, styles.tabTextActive]}>
                    Login
                  </Text>
                </LinearGradient>
              ) : (
                <Text style={styles.tabText}>Login</Text>
              )}
            </Pressable>

            <Pressable
              onPress={() => setActiveTab("register")}
              style={styles.tab}
            >
              {activeTab === "register" ? (
                <LinearGradient {...Gradients.primary} style={styles.tabActive}>
                  <Text style={[styles.tabText, styles.tabTextActive]}>
                    Registro
                  </Text>
                </LinearGradient>
              ) : (
                <Text style={styles.tabText}>Registro</Text>
              )}
            </Pressable>
          </View>

          <View style={styles.form}>
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>E-MAIL</Text>
              <Input
                containerStyle={styles.inputContainer}
                placeholder="seu@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                icon={
                  <MaterialIcons
                    name="mail-outline"
                    size={18}
                    color="#808080"
                  />
                }
              />
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>SENHA</Text>
              <Input
                containerStyle={styles.inputContainer}
                placeholder="••••••••"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                icon={
                  <MaterialIcons
                    name="lock-outline"
                    size={18}
                    color="#808080"
                  />
                }
              />
              <Pressable style={styles.forgotWrapper}>
                <Text style={styles.forgotText}>Esqueceu a senha?</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.ctaContainer}>
            <LinearGradient
              colors={[Color.blue["blue-light"], Color.purple["purple-light"]]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientButton}
            >
              <Button
                onPress={handleLogin}
                label={isSubmitting ? "Entrando..." : "Entrar"}
                mode="fill"
              />
            </LinearGradient>
            <View style={styles.registerContainer}>
              <Text style={styles.textRegister}>Ainda não tem uma conta?</Text>
              <Button label="Cadastrar" mode="outline" onPress={() => {}} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}
