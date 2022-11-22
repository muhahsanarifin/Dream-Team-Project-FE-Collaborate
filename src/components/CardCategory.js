import React from "react";
import styles from "../styles/CardCategory.module.css";

function CardCategory({ name, unit, setQuery, id, querys }) {
  return (
    <>
      <div className={styles["content"]}>
        <div
          className={styles["name"]}
          onClick={() => setQuery({ ...querys, categoryId: id, page: '1' })}
        >
          <p>{name}</p>
        </div>
        <div className={styles["qty"]}>
          <p>{unit}</p>
        </div>
      </div>
    </>
  );
}

export default CardCategory;
