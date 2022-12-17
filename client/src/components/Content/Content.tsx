// Content Component
import React from "react";
import TopBar from "../TopBar/TopBar";
import styles from "./Content.module.css";

interface Props {
  children: React.ReactNode;
}

const Content = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <TopBar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Content;
