import {
  SignUpFormData,
  signUpSchema,
} from "@/schemas/Register/register-schema";
import { calculateAge } from "@/utils/calculateAge";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function useSignUpForm() {
  const {
    control,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  const birthDate = watch("birthDate");
  const age = birthDate?.length === 10 ? calculateAge(birthDate) : null;

  return { control, handleSubmit, setError, watch, errors, isSubmitting, age };
}
