import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./ConfiguratorBase.module.css";

export default function ConfiguratorBase({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={clsx(styles.ConfiguratorBase, "not-content")}>
      {children}
    </div>
  );
}
