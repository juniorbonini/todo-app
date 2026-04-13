import { AxiosError } from "axios";
import { Controller } from "react-hook-form";
import { Alert, Text, View } from "react-native";

import { Button } from "@/components/Button";
import { GenderPicker } from "@/components/GenderPicker";
import { Input } from "@/components/Input";
import { useSignUpForm } from "@/hooks/SignUpForm";
import { SignUpFormData } from "@/schemas/Register/register-schema";
import { ApiErrorResponse } from "@/utils/AxiosErrorInterface/axios-error.props";
import { calculateAge } from "@/utils/calculateAge";
import { formatBirthDate } from "@/utils/formatBirthDate";
import { styles } from "./style";
import { useAuthContext } from "@/contexts/AuthContext/auth-context";

export function SignUpForm() {
  const { control, handleSubmit, errors, setError, watch, isSubmitting } =
    useSignUpForm();
  const { signUp } = useAuthContext();

  const birthDateValue = watch("birthDate");
  const age =
    birthDateValue?.length === 10 ? calculateAge(birthDateValue) : null;

  async function onSubmit(data: SignUpFormData) {
    try {
      await signUp(data);
    } catch (error: unknown) {
      let message = "Erro ao autenticar";

      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<ApiErrorResponse>;
        const response = axiosError.response?.data;

        if (response?.field && response?.message) {
          setError(response.field as keyof SignUpFormData, {
            type: "manual",
            message: response.message,
          });
          return;
        }

        if (response?.message) {
          message = response.message;
        } else if (error instanceof Error) {
          message = error.message;
        }
      }
      Alert.alert("Erro ao registrar", message);
    }
  }
  return (
    <>
      <View style={styles.form}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              label="NOME"
              placeholder="Seu nome completo"
              autoCapitalize="words"
              value={value}
              onChangeText={onChange}
              error={errors.name?.message}
              icon="person-outline"
            />
          )}
        />

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
              error={errors.email?.message}
              icon="mail-outline"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              label="SENHA"
              placeholder="••••••••"
              secureTextEntry
              value={value}
              onChangeText={onChange}
              error={errors.password?.message}
              icon="lock-outline"
            />
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <Input
              label="CONFIRME A SENHA"
              placeholder="••••••••"
              secureTextEntry
              value={value}
              onChangeText={onChange}
              error={errors.confirmPassword?.message}
              icon="lock-outline"
            />
          )}
        />

        <Controller
          control={control}
          name="birthDate"
          render={({ field: { onChange, value } }) => (
            <Input
              label="DATA DE NASCIMENTO"
              placeholder="DD/MM/AAAA"
              keyboardType="numeric"
              value={value}
              onChangeText={(text) => onChange(formatBirthDate(text))}
              error={errors.birthDate?.message}
              icon="cake"
            />
          )}
        />
        {age !== null && <Text style={styles.ageHint}>{age} anos</Text>}

        <Controller
          control={control}
          name="gender"
          render={({ field: { onChange, value } }) => (
            <>
              <View style={styles.genderContainer}>
                <Text style={styles.genderLabel}>Selecione o gênero</Text>
                <GenderPicker
                  value={value}
                  onChange={onChange}
                  error={errors.gender?.message}
                />
              </View>
            </>
          )}
        />
      </View>

      <View style={styles.ctaContainer}>
        <Button
          onPress={handleSubmit(onSubmit)}
          label={isSubmitting ? "Cadastrando..." : "Criar conta →"}
        />
      </View>
    </>
  );
}
