import React from "react";
import styles from "./styles.module.css";
import { asciiLogo } from "./logo";

export function AsciiLogo() {
  return <pre className={styles.ascii}>{asciiLogo}</pre>;
}
