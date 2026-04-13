import {
  AuthContextData,
  AuthContextProviderProps,
  UserData,
} from "@/contexts/AuthContext/auth-context-props";
import { SignInFormData } from "@/schemas/Login/login-schema";
import { SignUpFormData } from "@/schemas/Register/register-schema";
import { api } from "@/services/api";
import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

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
    const response = await api.post("auth/login", { data });
    const { token, user: userData } = response.data;

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser(userData);
    await SecureStore.setItemAsync("todo_token", token);
    await SecureStore.setItemAsync("todo_user", JSON.stringify(userData));
  }

  async function signUp(data: SignUpFormData) {
    const response = await api.post("users/register", data);
    const { token, user: userData } = response.data;

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser(userData);
    await SecureStore.setItemAsync("todo_token", token);
    await SecureStore.setItemAsync("todo_user", JSON.stringify(userData));
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
