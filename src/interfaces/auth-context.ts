import { ReactNode } from "react";

export interface AuthContextData {
  signed: boolean;
  user: UserData | null;
  signIn({ email, password }: CredentialsData): Promise<void>;
  signOut(): void;
  loading: boolean;
}

export interface AuthContextProviderProps {
  children: ReactNode;
}

export interface UserData {
  id: string;
  email: string;
  name: string;
}

export interface CredentialsData {
  email: string;
  password: string;
}
