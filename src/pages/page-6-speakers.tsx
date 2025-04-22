import { formSchema } from "../schema";
import { useForm } from "react-hook-form";

import Header from "../components/Header";
import Form from "../components/Form";
import Select from "../components/Select";

const cathedrals = ["Спикер А", "Спикер Б", "Спикер В", "Свой вариант"];

export default function PageMood() {
  const schema = formSchema.pick({ cathedral: true });
  const { register } = useForm();

  return (
    <article className="page page--mood">
      <Header progressBar />
      <Form title="Кто из спикеров запомнился больше всего?" schema={schema}>
        <Select options={cathedrals} name="cathedral" register={register} />
      </Form>
    </article>
  );
}
