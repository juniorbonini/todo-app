import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";

import { Hero } from "@/components/Hero";
import { SignInForm } from "@/components/FormSignIn";
import { SignUpForm } from "@/components/FormSignUp";
import { TabSwitcher } from "@/components/TabSwitcher";
import { SignIn } from "../SigIn";

export function Auth() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Hero
            title={activeTab === "login" ? "Bem-vindo de volta" : "Criar conta"}
            subtitle={
              activeTab === "login"
                ? "Entre para continuar"
                : "Preencha seus dados"
            }
          />

          <TabSwitcher activeTab={activeTab} onChange={setActiveTab} />

          {activeTab === "login" ? <SignIn /> : <SignUpForm />}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
