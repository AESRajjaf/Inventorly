// Content Component
import React from "react";
import TopBar from "../TopBar/TopBar";
import styles from "./Content.module.css";

interface Props {
  children: React.ReactNode;
  page: string;
}

const Content = ({ children, page }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <TopBar page={page} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Content;
