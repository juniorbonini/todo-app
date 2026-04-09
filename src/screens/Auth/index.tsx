import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";

import { Hero } from "@/components/Hero";
import { TabSwitcher } from "@/components/TabSwitcher";
import { useEffect, useRef } from "react";
import { SignIn } from "../SignIn";
import { SignInForm } from "@/components/FormSignIn";

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
          <Text style={{ color: "white" }}>Texto qualquer para teste</Text>
          <Hero
            title={activeTab === "login" ? "Bem-vindo de volta" : "Criar conta"}
            subtitle={
              activeTab === "login"
                ? "Entre para continuar"
                : "Preencha seus dados"
            }
          />

          <TabSwitcher activeTab={activeTab} onChange={setActiveTab} />

          {activeTab === "login" && <SignInForm />}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
