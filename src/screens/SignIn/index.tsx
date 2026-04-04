import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { useAuthContext } from "@/contexts/authContext";
import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { styles } from "./style";

const logoImage = require("../../assets/todo-logo.png");

export function SignIn() {
  const { signIn } = useAuthContext();
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.screen}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.logoContainer}>
          <Image source={logoImage} style={{ width: 110, height: 32 }} />
        </View>

        <Container>
          <View style={styles.inputContainer}>
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <Input
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={() => {}} label="Login" />
            <View style={styles.registerContainer}>
              <Text style={styles.text}>Ainda não tem uma conta?</Text>
              <Button onPress={() => {}} mode="outline" label="Cadastrar" />
            </View>
          </View>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
