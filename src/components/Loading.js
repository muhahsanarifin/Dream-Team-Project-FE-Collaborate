import React from "react";
import styles from "../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={`${styles["middle"]}`}>
      <div className={styles["lds-grid"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
