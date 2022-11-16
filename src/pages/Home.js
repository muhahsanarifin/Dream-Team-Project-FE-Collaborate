import React, { Component } from "react";

import Header from "../components/Header";

import styles from "../styles/Home.module.css";

import sofaWithPillow from "../assets/raz-retangle-1.png"

export class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <main className={[styles["main"]]}>
          <section className={`${styles["section"]} ${styles["fist-section"]}`}>
            <h1 className={styles["title"]}>Minimal Furniture Store</h1>
            <p className={styles["description"]}>
              Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
              Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices
              ex. Curabitur ut magna dignissim, dignissim
            </p>
          </section>
          <section
            className={`${styles["section"]} ${styles["second-section"]}`}
          >
            <span className={styles["second-section__image"]}>
              <img src={sofaWithPillow} alt="Sofa with Pilow" />
            </span>
            <span className={styles["second-section__description"]}>
              <h1>Mid-Century 1929 Sofa with Pilow</h1>
              <p>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                Quisque a nunc vel diam auctor commodo. Curabitur blandit
                ultrices ex. Curabitur ut magna dignissim, dignissim neque et,
                placerat risus. Morbi dictum lectus quam
              </p>
              <span>
                <p>SHOP NOW</p>
              </span>
            </span>
          </section>
          <section
            className={`${styles["section"]} ${styles["third-section"]}}`}
          ></section>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
        </main>
      </>
    );
  }
}

export default Home;
