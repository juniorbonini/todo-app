import z from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(1, "Informe o nome").min(4, "Mínimo de 4 caracteres"),

    email: z.string().min(1, "Informe o e-mail").email("E-mail inválido"),

    password: z
      .string()
      .min(1, "Informe a senha")
      .min(8, "Mínimo de 8 caracteres"),

    confirmPassword: z.string().min(1, "Confirme a senha"),

    birthDate: z
      .string()
      .min(1, "Informe a data de nascimento")
      .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Use o formato DD/MM/AAAA")
      .refine((val) => {
        const [day, month, year] = val.split("/").map(Number);
        const date = new Date(year, month - 1, day);
        const today = new Date();
        return !isNaN(date.getTime()) && date < today;
      }, "Data inválida"),

    gender: z.string().min(1, "Selecione o gênero"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
