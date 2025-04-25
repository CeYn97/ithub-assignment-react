import { formSchema } from "../schema";

import Feedback from "../components/Feedback/feedback";
import Header from "../components/Header";
import Form from "../components/Form";

export default function PageOffers() {
  const schema = formSchema.pick({ feedback: true });

  return (
    <article className="page page--mood">
      <Header progressBar />
      <Form
        title="Что тебе не понравилось? Какие есть пожелания?"
        schema={schema}
      >
        <Feedback name="feedback" />
      </Form>
    </article>
  );
}
