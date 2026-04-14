import z from "zod";

export const signUpSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),

    birthDate: z
      .string()
      .regex(/^\d{2}\/\d{2}\/\d{4}$/)
      .refine((val) => {
        const [day, month, year] = val.split("/").map(Number);
        const date = new Date(year, month - 1, day);
        const today = new Date();
        return !isNaN(date.getTime()) && date < today;
      }),

    gender: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
