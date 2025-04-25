import Typography from "../Typography";
import styles from "./Legend.module.css";

interface Legend {
  left: string;
  right: string;
}

export default function Legend({ left, right }: Legend) {
  return (
    <div className={styles.legend}>
      <Typography type="subtitle" text={left} />
      <Typography type="subtitle" text={right} />
    </div>
  );
}
