import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { useAuthContext } from "@/contexts/authContext";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";

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
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Header />
        </View>
        <View>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
