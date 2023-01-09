import React from 'react'

import styles from "../styles/CardComingSoon.module.css"

const CardComingSoon = ({title, text, input}) => {
  return (
    <>
      <span className={styles["sub-main"]}>
        <h3 className={styles["title"]}>{title}</h3>
        <span className={styles["email"]}>
          {input}
          <p>{text}</p>
        </span>
      </span>
    </>
  );
}

export default CardComingSoon