import { formSchema } from "../schema";
// import { useForm } from "react-hook-form";
// import { FormData } from "../schema";

import Header from "../components/Header";
import Form from "../components/Form";
import Email from "../components/Email/email";

export default function PageMood() {
  //   const { register } = useForm<FormData>();
  const schema = formSchema.pick({ mood: true });

  return (
    <article className="page page--mood">
      <Header progressBar />
      <Form
        title="Хочешь подписаться на предстоящие профильные события?"
        schema={schema}
      >
        <Email name="email" />
      </Form>
    </article>
  );
}
