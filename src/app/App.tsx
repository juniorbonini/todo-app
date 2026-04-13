import { Container } from "@/components/Container";
import { AuthContextProvider } from "@/contexts/AuthContext/auth-context";
import { Routes } from "@/routes";

export default function App() {
  return (
    <AuthContextProvider>
      <Container>
        <Routes />
      </Container>
    </AuthContextProvider>
  );
}
