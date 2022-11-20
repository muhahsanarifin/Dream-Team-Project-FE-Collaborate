import React from 'react'

import styles from "../styles/CardProduct.module.css"

const CardProduct = ({img, title, price}) => {
  return (
    <>
      <span className={styles["product"]}>
        <img src={img} alt="" className={styles["product__img"]} />
        <p className={styles["title"]}>{title}</p>
        <p className={styles["price"]}>{price}</p>
      </span>
    </>
  );
}

export default CardProduct