import { z } from "zod";

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
});

export type FormData = z.infer<typeof formSchema>;
