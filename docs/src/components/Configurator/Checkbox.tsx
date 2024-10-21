import { useId } from "react";
import styles from "./Checkbox.module.css";
import clsx from "clsx";

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
    <div className={clsx(styles.Checkbox, "form-group")}>
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
