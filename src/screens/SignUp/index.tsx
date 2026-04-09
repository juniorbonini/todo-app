import { Button } from "@/components/Button";
import { GenderPicker } from "@/components/GenderPicker";
import { Input } from "@/components/Input";
import { useAuthContext } from "@/contexts/AuthContext/authContext";
import { MaterialIcons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { LinearGradient } from "expo-linear-gradient";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { styles } from "./style";
import { SignInFormData } from "@/schemas/Login/login-schema";
import { signUpSchema } from "@/schemas/Register/register-schema";

const logoImage = require("../../assets/todo-new.png");

export function SignUp() {
  const { signUp } = useAuthContext();
  const {
    control,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  const birthDateValue = watch("birthDate");
  const age =
    birthDateValue?.length === 10 ? calculateAge(birthDateValue) : null;

  async function handleRegister(data: SignInFormData) {
    const calculatedAge = calculateAge(data.birthDate) ?? 0;

    try {
      await signUp({
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        birthDate: data.birthDate,
        gender: data.gender,
        age: calculatedAge,
      });
    } catch (error: any) {
      const messages = error.response?.data?.message;
      if (Array.isArray(messages)) {
        messages.forEach((msg: string) => {
          if (msg.toLowerCase().includes("e-mail"))
            setError("email", { message: msg });
          if (msg.toLowerCase().includes("senha"))
            setError("password", { message: msg });
          if (msg.toLowerCase().includes("nome"))
            setError("name", { message: msg });
        });
      } else {
        setError("email", { message: messages || "Erro ao cadastrar" });
      }
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
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <View style={styles.logoWrapper}>
            <Image source={logoImage} style={styles.logo} />
          </View>
          <Text style={styles.title}>Criar conta</Text>
          <Text style={styles.subtitle}>Preencha seus dados para começar</Text>
        </View>

        <View style={styles.tabContainer}>
          <Pressable style={styles.tab} onPress={() => {}}>
            <Text style={styles.tabText}>Login</Text>
          </Pressable>
          <View style={[styles.tab, styles.tabActive]}>
            <Text style={[styles.tabText, styles.tabTextActive]}>Registro</Text>
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>NOME</Text>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  containerStyle={styles.inputContainer}
                  placeholder="Seu nome completo"
                  autoCapitalize="words"
                  value={value}
                  onChangeText={onChange}
                  error={errors.name?.message}
                  icon={
                    <MaterialIcons
                      name="person-outline"
                      size={18}
                      color="#808080"
                    />
                  }
                />
              )}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>E-MAIL</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  containerStyle={styles.inputContainer}
                  placeholder="seu@email.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                  error={errors.email?.message}
                  icon={
                    <MaterialIcons
                      name="mail-outline"
                      size={18}
                      color="#808080"
                    />
                  }
                />
              )}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>SENHA</Text>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  containerStyle={styles.inputContainer}
                  placeholder="••••••••"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  error={errors.password?.message}
                  icon={
                    <MaterialIcons
                      name="lock-outline"
                      size={18}
                      color="#808080"
                    />
                  }
                />
              )}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>CONFIRMAR SENHA</Text>
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <Input
                  containerStyle={styles.inputContainer}
                  placeholder="••••••••"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  error={errors.confirmPassword?.message}
                  icon={
                    <MaterialIcons
                      name="lock-outline"
                      size={18}
                      color="#808080"
                    />
                  }
                />
              )}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>DATA DE NASCIMENTO</Text>
            <Controller
              control={control}
              name="birthDate"
              render={({ field: { onChange, value } }) => (
                <Input
                  containerStyle={styles.inputContainer}
                  placeholder="DD/MM/AAAA"
                  keyboardType="numeric"
                  value={value}
                  onChangeText={(text) => onChange(formatBirthDate(text))}
                  error={errors.birthDate?.message}
                  icon={<MaterialIcons name="cake" size={18} color="#808080" />}
                />
              )}
            />
            {age !== null && <Text style={styles.ageHint}>{age} anos</Text>}
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>GÊNERO</Text>
            <Controller
              control={control}
              name="gender"
              render={({ field: { onChange, value } }) => (
                <GenderPicker
                  value={value}
                  onChange={onChange}
                  error={errors.gender?.message}
                />
              )}
            />
          </View>
        </View>

        <View style={styles.ctaContainer}>
          <LinearGradient
            colors={["#4EA8DE", "#1E6F9F"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientButton}
          >
            <Button
              onPress={handleSubmit(handleRegister)}
              label={isSubmitting ? "Cadastrando..." : "Criar conta →"}
              mode="fill"
            />
          </LinearGradient>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
