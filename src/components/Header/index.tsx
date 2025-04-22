import Avatar from "../Avatar";

import Button from "../Button";

import usePersonStore from "../../store/usePersonStore";
import useFormStore from "../../store/useFormStore";

import styles from "./Header.module.css";
import { Stepper } from "../Progress/Stepper.tsx";

interface Header {
  progressBar?: boolean;
}

export default function Header({ progressBar = false }: Header) {
  const personName = usePersonStore((store) => store.name);
  const personDescription = usePersonStore((store) => store.description);
  const personAvatarSrc = usePersonStore((store) => store.avatarSrc);
  const formStep = useFormStore((store) => store.step);
  const formTotal = useFormStore((store) => store.total);

  return (
    <header className={styles.header}>
      <section className={styles["content-wrapper"]}>
        <Avatar src={personAvatarSrc} />
        <div className={styles["text-wrapper"]}>
          <p className={styles["person-name"]}>{personName}</p>
          <p className={styles["person-description"]}>{personDescription}</p>
        </div>
        <Button type="close" />
      </section>
      {progressBar && <Stepper currentStep={formStep} totalStep={formTotal} />}
    </header>
  );
}
