import type { ReactNode } from "react";
import styles from "./ConfiguratorBase.module.css";

export default function ConfiguratorBase({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={styles.ConfiguratorBase}>
      <div>{children}</div>
    </div>
  );
}
