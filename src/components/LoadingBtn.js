import React from "react";
import styles from '../styles/LoadingBtn.module.css';

function IsLoading() {
  return (
    <>
      <div className={styles["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default IsLoading;