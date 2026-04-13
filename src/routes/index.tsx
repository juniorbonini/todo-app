import { Home } from "@/screens/Home";
import { SignIn } from "@/screens/SigIn";
import { Loading } from "@/components/Loading";
import { useAuthContext } from "@/contexts/AuthContext/authContext";

export function Routes() {
  const { signed, loading } = useAuthContext();

  if (loading) {
    return <Loading />;
  }

  return signed ? <Home /> : <SignIn />;
}
