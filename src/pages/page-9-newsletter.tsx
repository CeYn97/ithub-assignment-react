import { formSchema } from "../schema";

import Header from "../components/Header";
import Form from "../components/Form";
import Email from "../components/Email/email";

export default function PageNewsletter() {
  const schema = formSchema.pick({ email: true });

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
