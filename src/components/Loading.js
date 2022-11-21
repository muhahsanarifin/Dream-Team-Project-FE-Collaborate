import React from "react";
import styles from "../styles/Loading.module.css";

function Loading() {
  return (
    <div className={`${styles["tengah"]}`}>
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
