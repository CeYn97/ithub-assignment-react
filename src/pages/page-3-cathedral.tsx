import { formSchema } from '../schema'

import Header from "../components/Header"
import Form from "../components/Form";
import Select from '../components/Select';

const cathedrals = ['программирование и веб-разработка', 'дизайн', 'цифровой маркетинг', 'разработка игр']

export default function PageMood() {
  const schema = formSchema.pick({ cathedral: true })

  return (
    <article className="page page--mood">
      <Header progressBar />
      <Form title="На каком направлении ты обучаешься?" schema={schema} >
        <Select options={cathedrals} name="cathedral" />
      </Form>
    </article>
  )
}
