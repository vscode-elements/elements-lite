import { useId } from "react";
import styles from "./Checkbox.module.css";

export default function Checkbox({
  label,
  setState,
  state,
}: {
  label: string;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  state: boolean;
}) {
  const id = useId();

  return (
    <div className={styles.Checkbox}>
      <input
        type="checkbox"
        id={id}
        checked={state}
        onChange={() => {
          setState(!state);
        }}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
