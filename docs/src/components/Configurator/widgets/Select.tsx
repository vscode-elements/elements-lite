import { useId } from "react";
import styles from "./Select.module.css";
import clsx from "clsx";

export default function Select({
  label,
  state,
  setState,
  options,
}: {
  label: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}) {
  const id = useId();

  return (
    <div className={clsx(styles.Select, "form-group")}>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={state}
        onChange={(ev) => {
          setState(ev.target.value);
        }}
      >
        {options.map((o) => (
          <option value={o} key={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
