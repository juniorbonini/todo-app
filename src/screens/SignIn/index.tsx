import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { useAuthContext } from "@/contexts/AuthContext/authContext";
import { Color } from "@/style/Color";
import { Gradients } from "@/utils/gradient-linear";
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
import { Hero } from "@/components/Hero";
import { TabSwitcher } from "@/components/TabSwitcher";

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
          <Hero />

         <TabSwitcher />

          <View style={styles.form}>
              <Input
                label="E-MAIL"
                placeholder="seu@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                icon="mail"
              />

              <Input
                label="SENHA"
                placeholder="••••••••"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                icon="lock-outline"
              />
            <Pressable style={styles.forgotWrapper}>
              <Text style={styles.forgotText}>Esqueceu a senha?</Text>
            </Pressable>
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
