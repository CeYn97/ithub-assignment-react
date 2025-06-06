import { formSchema } from "../schema";
import { useForm } from "react-hook-form";
import { FormData } from "../schema";

import Rating from "../components/Rating";
import Header from "../components/Header";
import Form from "../components/Form";

export default function PageOrganization() {
  const { register } = useForm<FormData>();
  const schema = formSchema.pick({ organization: true });

  return (
    <article className="page page--mood">
      <Header progressBar />
      <Form title="Оцени уровень организации события" schema={schema}>
        <Rating
          type="numeric"
          range={5}
          startFrom={1}
          name="organization"
          register={register}
        />
      </Form>
    </article>
  );
}
