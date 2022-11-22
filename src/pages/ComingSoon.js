import React from "react";

import Header from "../components/Header";
import styles from "../styles/ComingSoon.module.css";
import ComingSoonCard from "../components/CardComingSoon"

const ComingSoon = () => {
  return (
    <>
      <Header />
      <main className={styles["main"]}>
        <ComingSoonCard/>
      </main>
    </>
  );
};

export default ComingSoon;
