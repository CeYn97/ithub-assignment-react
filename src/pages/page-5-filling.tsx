import { useForm } from "react-hook-form";
import { formSchema } from "../schema";
import { FormData } from "../schema";

import Rating from "../components/Rating";
import Header from "../components/Header";
import Form from "../components/Form";

export default function PageFilling() {
  const { register } = useForm<FormData>();
  const schema = formSchema.pick({ filling: true });

  return (
    <article className="page page--mood">
      <Header progressBar />
      <Form
        title="Оцени наполнение (спикеры, темы лекций и мастер-классов)"
        schema={schema}
      >
        <Rating
          type="numeric"
          range={11}
          startFrom={0}
          name="filling"
          register={register}
        />
      </Form>
    </article>
  );
}
