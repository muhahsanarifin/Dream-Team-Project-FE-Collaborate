import React from "react";

import Header from "../components/Header";
import styles from "../styles/ComingSoon.module.css";
import ComingSoonCard from "../components/CardComingSoon";

const ComingSoon = () => {
  return (
    <>
      <Header />
      <main className={styles["main"]}>
        <ComingSoonCard
          title={`We’re Building Something New`}
          input={<input type="text" placeholder="Your Email" />}
          text={`Subscribe`}
        />
      </main>
    </>
  );
};

export default ComingSoon;
