import useFormStore from "../store/useFormStore";

export default function FinalScreen() {
  const formData = useFormStore((store) => store.data);

  console.log("Итоговые ответы:", formData);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Спасибо за фидбек!</h1>
      <p>Ваши ответы были успешно отправлены.</p>
    </div>
  );
}
