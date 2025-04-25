import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Typography from "../components/Typography";

import useFormStore from "../store/useFormStore";

export default function PageFinal() {
  const formData = useFormStore((store) => store.data);
  const loggedRef = useRef(false);

  useEffect(() => {
    if (!loggedRef.current) {
      console.group("Данные формы");
      Object.entries(formData).forEach(([key, value]) => {
        console.log(`${key}:`, value);
      });
      console.groupEnd();
      loggedRef.current = true;
    }
  }, [formData]);

  return (
    <article className="page page--final">
      <Header />
      <Typography type="title" text="Благодарю за фидбек 🎉" />
      <Typography
        type="caption"
        text="Твоя обратная связь будет обработана и учтена! Лови бонусы от любимого спикера"
      />
      <Footer>
        <Button type="bonuspack" />
      </Footer>
    </article>
  );
}
