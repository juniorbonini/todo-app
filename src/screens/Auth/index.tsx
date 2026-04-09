import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";

import { SignInForm } from "@/components/FormSignIn";
import { SignUpForm } from "@/components/FormSignUp";
import { Hero } from "@/components/Hero";
import { TabSwitcher } from "@/components/TabSwitcher";
import { useEffect, useRef } from "react";

export function Auth() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, []);

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

          {activeTab === "login" ? <SignInForm /> : <SignUpForm />}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
