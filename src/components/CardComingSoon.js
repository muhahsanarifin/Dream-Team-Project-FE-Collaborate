import React from 'react'

import styles from "../styles/CardComingSoon.module.css"

const CardComingSoon = () => {
  return (
    <>
      <span className={styles["sub-main"]}>
        <h3 className={styles["title"]}>We're Building SomeThing New</h3>
        <span className={styles["email"]}>
          <input type="text" placeholder="Your Email" />
          <p>Subscribe</p>
        </span>
      </span>
    </>
  );
}

export default CardComingSoon