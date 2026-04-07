import { SignInFormData } from "@/schemas/Login/login-schema";
import { SignupFormData } from "@/schemas/Register/register-schema";
import { ReactNode } from "react";

export interface AuthContextData {
  signed: boolean;
  user: UserData | null;
  signIn(data: SignInFormData): Promise<void>;
  signUp(data: SignupFormData): Promise<void>;
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
