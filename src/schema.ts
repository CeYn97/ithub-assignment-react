import { email, z } from "zod";

const cathedralSchema = z.enum([
  "программирование и веб-разработка",
  "дизайн",
  "цифровой маркетинг",
  "разработка игр",
  "",
]);

export const formSchema = z.object({
  mood: z.string(),
  cathedral: cathedralSchema,
  feedback: z.string().optional(),
  email: z.string().email("Неверный email").optional(),
});

export type FormData = z.infer<typeof formSchema>;
