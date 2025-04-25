import styles from "./Footer.module.css";
import logo from "../../assets/images/Logo.png";

interface Footer {
  withLogo?: boolean;
  children?: React.ReactElement | React.ReactElement[];
}

export default function Footer({ withLogo = false, children }: Footer) {
  return (
    <footer className={styles.footer}>
      {withLogo && (
        <img src={logo} alt="logo" className={styles["footer-logo"]} />
      )}
      {children}
    </footer>
  );
}
