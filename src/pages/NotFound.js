import React from "react";
import Header from "../components/Header";
import styles from "../styles/NotFound.module.css";
import oval from "../assets/oval-2.png";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className={styles["main"]}>
        <section className={styles["main-left"]}>
          <h1>404</h1>
          <h3>Page cannot be found!</h3>
          <p>
            Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
            Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices
            exurabitur ut magna dignissim, dignissi
          </p>
          <span className={styles["btn-home-page"]}>
            <span></span>
            <p>BACK TO HOME</p>
          </span>
        </section>
        <section className={styles["main-rigth"]}>
          <span className={styles["border"]}>
            <img src={oval} alt="Oval" />
          </span>
        </section>
      </main>
    </>
  );
};

export default NotFound;
