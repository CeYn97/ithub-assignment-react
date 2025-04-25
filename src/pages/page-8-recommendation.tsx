import { formSchema } from "../schema";
import { useForm } from "react-hook-form";
import { FormData } from "../schema";

import Rating from "../components/Rating";
import Header from "../components/Header";
import Form from "../components/Form";

export default function PageRecommendations() {
  const { register } = useForm<FormData>();
  const schema = formSchema.pick({ recommendation: true });

  return (
    <article className="page page--mood">
      <Header progressBar />
      <Form
        title="Порекомендуешь ли ты своим школьным друзьям прийти на следующее подобное мероприятие?"
        schema={schema}
      >
        <Rating
          type="numeric"
          range={11}
          startFrom={0}
          name="recommendation"
          register={register}
          withLegend
          legendLeft="0 = Вряд ли..."
          legendRight="10 = По любому!"
        />
      </Form>
    </article>
  );
}
