import React from "react";
import { useNavigate } from "react-router";

import styles from "../styles/CardProduct.module.css";

const CardProduct = ({ img, title, price, id }) => {
  const navigate = useNavigate();
  const detailsProduct = () => {
    navigate(`/products/${id}`);
  };
  return (
    <>
      <span className={styles["product"]}>
        <img
          onClick={detailsProduct}
          src={img}
          alt=""
          className={styles["product__img"]}
        />
        <p className={styles["title"]}>{title}</p>
        <p className={styles["price"]}>Rp {price}</p>
      </span>
    </>
  );
};

export default CardProduct;
