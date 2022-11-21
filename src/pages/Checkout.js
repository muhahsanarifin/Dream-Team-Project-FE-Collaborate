import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Checkout.module.css";

import chev from "../assets/chevron.png";
import visa from "../assets/visa.png";

class Checkout extends Component {
  render() {
    return (
      <Fragment>
        <main className={styles["main-2"]}>
          <main className={styles["main"]}>
            <Header />
            <section className={styles["section-1"]}>
              <div className={styles["section-1-nav"]}>
                <p className={styles["section-1-text"]}>Cart</p>
                <p className={styles["section-1-arrow"]}>{">"}</p>
                <p className={styles["section-1-text"]}>Checkout</p>
              </div>
              <h1 className={styles["section-1-header"]}>Check Out</h1>
              <p className={styles["section-1-text"]}>
                Pay and get your ordered items
              </p>
            </section>
            <section className={styles["section-2"]}>
              <h1 className={styles["self"]}>Self Information</h1>
              <input
                className={styles["input-1"]}
                type="text"
                placeholder="Your Name *"
              />
              <input
                className={styles["input-1"]}
                type="text"
                placeholder="Address *"
              />
              <div className={styles["phone-div"]}>
                <div className={styles["code-div"]}>
                  <p>+62</p>
                  <img src={chev} alt="img" />
                </div>
                <input
                  className={styles["input-2"]}
                  type="text"
                  placeholder="Phone Number *"
                />
              </div>
              <div className={styles["payment-div"]}>
                <div className={styles["payment-content-div"]}>
                  <img src={visa} alt="img" />
                  <p>Pay with Visa</p>
                </div>
                <img src={chev} alt="img" />
              </div>
              <button className={styles["checkout-btn"]}>Check Out</button>
            </section>
            <Footer />
          </main>
        </main>
      </Fragment>
    );
  }
}

export default Checkout;
