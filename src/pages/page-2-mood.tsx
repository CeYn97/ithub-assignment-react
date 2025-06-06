import { useForm } from "react-hook-form";
import { formSchema } from "../schema";
import { FormData } from "../schema";

import Rating from "../components/Rating";
import Header from "../components/Header";
import Form from "../components/Form";

export default function PageMood() {
  const { register } = useForm<FormData>();
  const schema = formSchema.pick({ mood: true });

  return (
    <article className="page page--mood">
      <Header progressBar />
      <Form title="Какое у тебя настроение после мероприятия?" schema={schema}>
        <Rating type="emoji" range={5} name="mood" register={register} />
      </Form>
    </article>
  );
}
