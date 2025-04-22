import styles from "./Stepper.module.css";

interface StepperProps {
  currentStep: number;
  totalStep: number;
}

export function Stepper({ currentStep, totalStep }: StepperProps) {
  return (
    <div className={styles.stepper}>
      {Array.from({ length: totalStep }).map((_, i) => (
        <div
          key={i}
          className={`${styles.step} ${
            i < currentStep ? styles.stepActive : ""
          }`}
        />
      ))}
    </div>
  );
}
