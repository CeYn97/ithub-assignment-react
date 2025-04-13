import Header from "../components/Header"
import Footer from "../components/Footer"
import Button from "../components/Button"
import Typography from "../components/Typography"

export default function PageStart() {
  return (
    <article className="page page--start">
      <Header />
      <Typography type="title" text="Привет 👋  Был на ПрофDay?" />
      <Typography type="subtitle" text="Поделись впечатлениями!" />
      <Footer>
        <Button type="start" />
      </Footer>
    </article>
  )
}
