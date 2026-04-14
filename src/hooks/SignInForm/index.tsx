import { SignInFormData } from "@/schemas/Login/login-schema";
import { useForm } from "react-hook-form";

export function useSignInForm() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>();

  return { control, handleSubmit, setError, errors, isSubmitting };
}
