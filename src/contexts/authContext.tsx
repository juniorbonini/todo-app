import {
  AuthContextData,
  AuthContextProviderProps,
  CredentialsData,
  UserData,
} from "@/interfaces/auth-context";
import { api } from "@/services/api";
import * as SecureStore from "expo-secure-store";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageToken = await SecureStore.getItemAsync("toekn_todo");
      const storageUser = await SecureStore.getItemAsync("todo_user");

      if (storageToken && storageUser) {
        setUser(JSON.parse(storageUser));
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn({ email, password }: CredentialsData) {
    const response = await api.post("auth/login", { email, password });
    const { token, user: userData } = response.data;

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
