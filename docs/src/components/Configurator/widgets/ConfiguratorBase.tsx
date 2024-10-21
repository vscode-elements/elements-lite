import type { ReactNode } from "react";
import styles from "./ConfiguratorBase.module.css";
import clsx from "clsx";

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
