import { useId, useState, type ChangeEvent, type MouseEvent } from "react";
import { iconNames } from "./icons";
import styles from "./IconPicker.module.css";
import clsx from "clsx";

export default function IconPicker({
  label,
  state,
  setState,
}: {
  label: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}) {
  const id = useId();
  const [filter, setFilter] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setFilter(ev.target.value);
  };

  return (
    <div className={clsx(styles.IconPicker, "not-content")}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.buttons}>
        <button
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
          className={styles.actionButton}
        >
          <i
            className={clsx("codicon", {
              "codicon-chevron-down": !showDropdown,
              "codicon-chevron-up": showDropdown,
            })}
          ></i>
          {state ? state : "None selected"}
        </button>
        <button
          onClick={() => {
            setState("");
          }}
          className={styles.actionButton}
          disabled={!state}
        >
          <i className="codicon codicon-close"></i>
          Reset
        </button>
      </div>
      {showDropdown ? (
        <div className={styles.dropdown}>
          <div className={styles.formControl}>
            <input
              type="text"
              value={filter}
              onInput={handleInputChange}
              id={id}
              placeholder="Icon name"
            />
          </div>
          <ul>
            {iconNames
              .filter((i) => i.includes(filter))
              .map((i) => (
                <li key={i}>
                  <button
                    type="button"
                    title={i}
                    name={i}
                    onClick={() => {
                      setState(i);
                    }}
                    className={clsx(styles.iconButton, {
                      [styles.selected]: i === state,
                    })}
                  >
                    <i className={`codicon codicon-${i}`}></i>
                  </button>
                </li>
              ))}
          </ul>
          <div className={styles.dropdownButtons}>
            <button
              onClick={() => {
                setShowDropdown(false);
              }}
              className={styles.actionButton}
            >
              <i className="codicon codicon-check"></i>
              Accept
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
