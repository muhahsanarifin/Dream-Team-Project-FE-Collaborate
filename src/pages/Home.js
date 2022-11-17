import React, { Component } from "react";

import Header from "../components/Header";

import Footer from "../components/Footer";

import styles from "../styles/Home.module.css";

import sofaWithPillow from "../assets/raz-retangle-1.png";

import miniModernLamp from "../assets/raz-retangle-2.png";

import blueLivingVintageChair from "../assets/raz-retangle-3.png";

import japaneseStyleBlueCeramic from "../assets/raz-retangle-4.png";

import japanesePlateFloral from "../assets/raz-retangle-5.png";

import modernFloorLamp from "../assets/raz-retangle-6.png";

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
            <span className={styles["section__image"]}>
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
              <span className={styles["btn-shop-now"]}>
                <span></span>
                <p>SHOP NOW</p>
              </span>
            </span>
          </section>
          <section
            className={`${styles["section"]} ${styles["third-section"]}`}
          >
            <span className={styles["section__image"]}>
              <img src={miniModernLamp} alt="Mini Morder Lamp" />
            </span>
            <span className={styles["second-section__description"]}>
              <h1>Mini Modern Lamp</h1>
              <p>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                Quisque a nunc vel diam auctor commodo. Curabitur blandit
                ultrices ex. Curabitur ut magna dignissim, dignissim neque et,
                placerat risus. Morbi dictum lectus quam
              </p>
              <span className={styles["btn-shop-now"]}>
                <span></span>
                <p>SHOP NOW</p>
              </span>
            </span>
          </section>
          <section
            className={`${styles["section"]} ${styles["fourth-section"]}`}
          >
            <span className={styles["section__image"]}>
              <img
                src={blueLivingVintageChair}
                alt="Blue Living Vintage Chair"
              />
            </span>
            <span className={styles["second-section__description"]}>
              <h1>Blue Living Vintage Chair</h1>
              <p>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                Quisque a nunc vel diam auctor commodo. Curabitur blandit
                ultrices ex. Curabitur ut magna dignissim, dignissim neque et,
                placerat risus. Morbi dictum lectus quam
              </p>
              <span className={styles["btn-shop-now"]}>
                <span></span>
                <p>SHOP NOW</p>
              </span>
            </span>
          </section>
          <section
            className={`${styles["section"]} ${styles["fifth-section"]}`}
          >
            <span className={styles["section__image"]}>
              <img
                src={japaneseStyleBlueCeramic}
                alt="Japanese Style Blue Ceramic"
              />
            </span>
            <span className={styles["second-section__description"]}>
              <h1>Japanese Style Blue Ceramic</h1>
              <p>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                Quisque a nunc vel diam auctor commodo. Curabitur blandit
                ultrices ex. Curabitur ut magna dignissim, dignissim neque et,
                placerat risus. Morbi dictum lectus quam
              </p>
              <span className={styles["btn-shop-now"]}>
                <span></span>
                <p>SHOP NOW</p>
              </span>
            </span>
          </section>
          <section
            className={`${styles["section"]} ${styles["seventh-section"]}`}
          >
            <span className={styles["section__image"]}>
              <img src={japanesePlateFloral} alt="Japanese plate floral" />
            </span>
            <span className={styles["second-section__description"]}>
              <h1>Japanese plate floral</h1>
              <p>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                Quisque a nunc vel diam auctor commodo. Curabitur blandit
                ultrices ex. Curabitur ut magna dignissim, dignissim neque et,
                placerat risus. Morbi dictum lectus quam
              </p>
              <span className={styles["btn-shop-now"]}>
                <span></span>
                <p>SHOP NOW</p>
              </span>
            </span>
          </section>
          <section
            className={`${styles["section"]} ${styles["eigth-section"]}`}
          >
            <span className={styles["section__image"]}>
              <img src={modernFloorLamp} alt="Modern Floor Lamp" />
            </span>
            <span className={styles["second-section__description"]}>
              <h1>Modern Floor Lamp</h1>
              <p>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                Quisque a nunc vel diam auctor commodo. Curabitur blandit
                ultrices ex. Curabitur ut magna dignissim, dignissim neque et,
                placerat risus. Morbi dictum lectus quam
              </p>
              <span className={styles["btn-shop-now"]}>
                <span></span>
                <p>SHOP NOW</p>
              </span>
            </span>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
