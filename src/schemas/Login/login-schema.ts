import z from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "O e-mail é obrgatório")
    .email("O e-mail é inválido"),

  password: z
    .string()
    .min(1, "A senha é obrigatória")
    .min(8, "A senha deve conter no mínimo 8 caracteres"),
});

export type SignInFormData = z.infer<typeof signInSchema>;
