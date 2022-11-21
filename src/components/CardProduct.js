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
<<<<<<< HEAD
        <p className={styles["price"]}>Rp {price}</p>
=======
        <p className={styles["price"]}>RP {price}</p>
>>>>>>> 3aa5e8d22987e121748e62a2af70c1bde1d94b96
      </span>
    </>
  );
};

export default CardProduct;
