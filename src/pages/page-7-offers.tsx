import { formSchema } from "../schema";
import { useForm } from "react-hook-form";

import Header from "../components/Header";
import Form from "../components/Form";
import Legend from "../components/Legend";

export default function PageMood() {
  const schema = formSchema.pick({ cathedral: true });
  const { register } = useForm();

  return (
    <article className="page page--mood">
      <Header progressBar />
      <Form
        title="Что тебе не понравилось? Какие есть пожелания?"
        schema={schema}
      >
        <Legend />
      </Form>
    </article>
  );
}
