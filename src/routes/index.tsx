import { Loading } from "@/components/Loading";
import { useAuthContext } from "@/contexts/AuthContext/auth-context";
import { Auth } from "@/screens/Auth";
import { Home } from "@/screens/Home";

export function Routes() {
  const { signed, loading } = useAuthContext();

  if (loading) {
    return <Loading />;
  }

  return signed ? <Home /> : <Auth />;
}
