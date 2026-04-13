import {
  AuthContextData,
  AuthContextProviderProps,
  UserData,
} from "@/contexts/AuthContext/auth-context-props";
import { SignInFormData } from "@/schemas/Login/login-schema";
import { SignUpFormData } from "@/schemas/Register/register-schema";
import { api } from "@/services/api";
import { calculateAge } from "@/utils/calculateAge";
import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  function setSession(token: string, userData: UserData) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setUser(userData);
  }

  function formatBirthDateToISO(birthDate: string) {
    const [day, month, year] = birthDate.split("/").map(Number);
    return new Date(year, month - 1, day).toISOString();
  }

  useEffect(() => {
    async function loadStorageData() {
      try {
        const storageToken = await SecureStore.getItemAsync("todo_token");
        const storageUser = await SecureStore.getItemAsync("todo_user");

        if (storageToken && storageUser) {
          api.defaults.headers.common["Authorization"] =
            `Bearer ${storageToken}`;

          setUser(JSON.parse(storageUser));
        }
      } catch (error) {
        console.error("Erro ao carregar storage:", error);
      } finally {
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  async function signIn(data: SignInFormData) {
    const response = await api.post("auth/login", data);
    const { token, user: userData } = response.data;

    setSession(token, userData);
    await SecureStore.setItemAsync("todo_token", token);
    await SecureStore.setItemAsync("todo_user", JSON.stringify(userData));
  }

  async function signUp(data: SignUpFormData) {
    const age = calculateAge(data.birthDate);

    if (age === null) {
      throw new Error("Data de nascimento inválida");
    }

    await api.post("users/register", {
      ...data,
      birthDate: formatBirthDateToISO(data.birthDate),
      age,
    });

    await signIn({
      email: data.email,
      password: data.password,
    });
  }

  function signOut() {
    SecureStore.deleteItemAsync("todo_token");
    SecureStore.deleteItemAsync("todo_user");

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        signOut,
        loading,
        signed: !!user,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}
