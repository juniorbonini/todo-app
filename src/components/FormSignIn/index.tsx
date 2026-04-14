import { useSignInForm } from "@/hooks/SignInForm";
import { SignInFormData } from "@/schemas/Login/login-schema";
import { ApiErrorResponse } from "@/utils/AxiosErrorInterface/axios-error.props";
import { AxiosError } from "axios";
import { Controller } from "react-hook-form";
import { Alert, Pressable, Text, View } from "react-native";
import { Button } from "../Button";
import { Input } from "../Input";
import { styles } from "./style";
import { useAuthContext } from "@/contexts/AuthContext/auth-context";

export function SignInForm() {
  const { control, handleSubmit, errors, isSubmitting, setError } =
    useSignInForm();
  const { signIn } = useAuthContext();

  async function onSubmit(data: SignInFormData) {
    try {
      await signIn(data);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<ApiErrorResponse>;
        const response = axiosError.response?.data;

        if (response?.field && response?.message) {
          setError(response.field as keyof SignInFormData, {
            type: "manual",
            message: response.message,
          });
          return;
        }

        if (response?.message) {
          Alert.alert(response.message);
        }
      }
    }
  }
  return (
    <>
      <View style={styles.form}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              label="E-MAIL"
              placeholder="seu@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
              icon="email"
              error={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              label="SENHA"
              placeholder="*****"
              secureTextEntry
              value={value}
              onChangeText={onChange}
              icon="lock-outline"
              error={errors.password?.message}
            />
          )}
        />
        <Pressable style={styles.forgotWrapper}>
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </Pressable>
      </View>

      <View style={styles.ctaContainer}>
        <Button
          onPress={handleSubmit(onSubmit)}
          label={isSubmitting ? "Entrando..." : "Entrar"}
        />

      </View>
    </>
  );
}
