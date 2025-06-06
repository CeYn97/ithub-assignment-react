import clsx from "clsx";

import styles from "./Button.module.css";
import useFormStore from "../../store/useFormStore";
import closeIcon from "../../assets/icons/close.svg";

interface Button {
  type: "close" | "submit" | "back" | "next" | "start" | "bonuspack";
}

function ButtonClose() {
  const setFormStep = useFormStore((store) => store.setStep);
  const resetFormData = useFormStore((store) => store.resetData);
  return (
    <button
      type="reset"
      className={clsx(styles.button, styles["button-icon"])}
      onClick={() => {
        resetFormData();
        setFormStep(0);
      }}
    >
      <img src={closeIcon} alt="close" />
    </button>
  );
}

function ButtonNext() {
  return (
    <button
      type="submit"
      className={clsx(styles.button, styles["button-primary"])}
    >
      Далее
    </button>
  );
}

function ButtonBack() {
  const step = useFormStore((store) => store.step);
  const setStep = useFormStore((store) => store.setStep);

  return (
    <button
      type="button"
      className={clsx(styles.button, styles["button-secondary"])}
      onClick={() => setStep(step - 1)}
    >
      Назад
    </button>
  );
}

function ButtonStart() {
  const setStep = useFormStore((store) => store.setStep);

  return (
    <button
      type="button"
      className={clsx(
        styles.button,
        styles["button-full"],
        styles["button-secondary"]
      )}
      onClick={() => setStep(1)}
    >
      Оставить фидбек
    </button>
  );
}

function ButtonSubmit() {
  return (
    <button
      type="submit"
      className={clsx(styles.button, styles["button-primary"])}
    >
      Завершить
    </button>
  );
}

function ButtonDownload() {
  const handleDownload = () => {
    console.log("Бонус-пак от спикера скачан!");
  };

  return (
    <button
      type="button"
      className={clsx(styles.buttonDownload, styles["button-tertiary"])}
      onClick={handleDownload}
    >
      Скачать бонус-пак от спикера
    </button>
  );
}

export default function Button({ type }: Button) {
  return {
    close: <ButtonClose />,
    submit: <ButtonSubmit />,
    back: <ButtonBack />,
    next: <ButtonNext />,
    start: <ButtonStart />,
    bonuspack: <ButtonDownload />,
  }[type];
}
