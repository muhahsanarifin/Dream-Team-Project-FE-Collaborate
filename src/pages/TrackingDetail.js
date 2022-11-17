import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/TrackingDetail.module.css";

import map from "../assets/map.png";

class TrackingDetail extends Component {
  render() {
    return (
      <Fragment>
        <main className={styles["main-2"]}>
          <main className={styles["main"]}>
            <Header />
            <section className={styles["section-1"]}>
              <div className={styles["section-1-nav"]}>
                <p className={styles["section-1-text"]}>Tracking</p>
                <p className={styles["section-1-arrow"]}>{">"}</p>
              </div>
              <h1 className={styles["section-1-header"]}>Order Tracking</h1>
              <p className={styles["section-1-text"]}>
                Track where your order arrived{" "}
              </p>
            </section>
            <section className={styles["section-2"]}>
              <aside className={styles["aside-left"]}>
                <img src={map} alt="img" />
              </aside>
              <aside className={styles["aside-right"]}>
                <p className={styles["aside-right-text"]}>
                  To track your order please enter your Order ID in the box
                  below and press the "Track" button. This was given to you on
                  your receipt and in the confirmation email you should have
                  received.
                </p>
                <label className={styles["aside-right-label"]}>Order ID</label>
                <input
                  type="text"
                  placeholder="Found in your order confirmation email."
                  className={styles["aside-right-input-1"]}
                />
                <label className={styles["aside-right-label"]}>
                  Billing Email
                </label>
                <input
                  className={styles["aside-right-input-2"]}
                  type="text"
                  placeholder="Email you used during checkout"
                />
                <button className={styles["aside-right-btn"]}>Track Now</button>
              </aside>
            </section>
            <Footer />
          </main>
        </main>
      </Fragment>
    );
  }
}

export default TrackingDetail;
