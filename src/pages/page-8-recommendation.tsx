import { FormData } from "../schema";
import { formSchema } from "../schema";
import { useForm } from "react-hook-form";

import Header from "../components/Header";
import Form from "../components/Form";
import Rating from "../components/Rating";

export default function PageMood() {
  const schema = formSchema.pick({ cathedral: true });
  const { register } = useForm<FormData>();

  return (
    <article className="page page--mood">
      <Header progressBar />
      <Form
        title="Хочешь подписаться на предстоящие профильные события?"
        schema={schema}
      >
        <Rating type="emoji" range={5} name="mood" register={register} />
      </Form>
    </article>
  );
}
