import { useEffect, useId, useRef, useState, type ChangeEvent } from "react";
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (ev: Event) => {
      if (!(ev.target as HTMLElement).closest(`.${styles.dropdown}`)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDropdown]);

  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setFilter(ev.target.value);
  };

  return (
    <div className={clsx(styles.IconPicker, "form-group")}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.buttons}>
        <button
          onClick={(ev) => {
            ev.stopPropagation();
            setShowDropdown(!showDropdown);
          }}
          className={clsx(styles.actionButton, styles.dropdownOpen)}
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
          className={clsx(styles.actionButton, styles.reset)}
          disabled={!state}
          title="Reset"
        >
          <i className="codicon codicon-close"></i>
          <span className={styles.text}>Reset</span>
        </button>
      </div>
      {showDropdown ? (
        <div className={styles.dropdown} ref={dropdownRef}>
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
