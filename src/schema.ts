import { z } from "zod";

const cathedralSchema = z.enum([
  "программирование и веб-разработка",
  "дизайн",
  "цифровой маркетинг",
  "разработка игр",
  "",
]);

const speakersSchema = z.enum([
  "Спикер А",
  "Спикер Б",
  "Спикер В",
  "Свой вариант",
]);

export const formSchema = z.object({
  mood: z.string().min(1, { message: "Поле обязательно" }),
  cathedral: cathedralSchema,
  speakers: speakersSchema,
  feedback: z.string().optional(),
  email: z.email("Введите корректный email"),
  organization: z.string().min(1, { message: "Поле обязательно" }),
  filling: z.string().min(1, { message: "Поле обязательно" }),
  recommendation: z.string().min(1, { message: "Поле обязательно" }),
});

export type FormData = z.infer<typeof formSchema>;
