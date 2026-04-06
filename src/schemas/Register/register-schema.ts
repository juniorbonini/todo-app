import z from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, "O nome é obrigatório")
      .min(4, "O nome deve conter no mínimo 4 caracteres"),

    email: z
      .string()
      .min(1, "O e-mail é obrigatório")
      .email("O e-mail é inválido"),

    password: z
      .string()
      .min(1, "A senha é obrigatória")
      .min(8, "A senha deve conter no mínimo 8 caracteres"),

    confirmPassword: z.string().min(1, "A confirmaçåo de senaha é obrigatória"),

    birthDate: z
      .string()
      .min(1, "A data de nascimento é obrigatória")
      .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Data inválida — use DD/MM/AAAA")
      .refine((val) => {
        const [day, month, year] = val.split("/").map(Number);
        const date = new Date(year, month - 1, day);
        const today = new Date();
        return date instanceof Date && !isNaN(date.getTime()) && date < today;
      }, "Data de nascimento inválida"),
    gender: z.string().min(1, "O gênero é obrigatório"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas nåo coincidem",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
