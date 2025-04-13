import { formSchema } from '../schema'

import Rating from "../components/Rating";
import Header from "../components/Header"
import Form from "../components/Form";

export default function PageMood() {
  const schema = formSchema.pick({ mood: true })

  return (
    <article className="page page--mood">
      <Header progressBar />
      <Form title="Какое у тебя настроение после мероприятия?" schema={schema} >
        <Rating type="emoji" range={5} name="mood" />
      </Form>
    </article>
  )
}
