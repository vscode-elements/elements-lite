import clsx from "clsx";
import { useId } from "react";
import styles from "./Textfield.module.css";

export default function Textfield({
  label,
  state,
  setState,
}: {
  label: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}) {
  const id = useId();

  return (
    <div className={clsx(styles.Textfield, "form-group")}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={state}
        onChange={(ev) => {
          setState(ev.target.value);
        }}
      />
    </div>
  );
}
