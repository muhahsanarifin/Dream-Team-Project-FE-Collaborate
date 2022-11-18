import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/TrackingDetail.module.css";

import map from "../assets/map.png";
import truck from "../assets/truck.png";
import line from "../assets/deliveryline.png";

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
                <p className={styles["section-1-arrow"]}>Tracking Detail</p>
              </div>
              <h1 className={styles["section-1-header"]}>Tracking Detail</h1>
              <p className={styles["section-1-text"]}>
                Track where your order arrived{" "}
              </p>
            </section>
            <section className={styles["section-2"]}>
              <aside className={styles["aside-left"]}>
                <img src={map} alt="img" />
              </aside>
              <aside className={styles["aside-right"]}>
                <div className={styles["aside-right-top"]}>
                  <div>
                    <p className={styles["aside-right-text-1"]}>Order ID</p>
                    <p className={styles["aside-right-text-2"]}>
                      ABCD-EFGH-W123
                    </p>
                  </div>
                  <div>
                    <p className={styles["aside-right-text-1"]}>Order Item</p>
                    <p className={styles["aside-right-text-2"]}>
                      Fabric Mid Century Chair
                    </p>
                  </div>
                </div>
                <div className={styles["line"]}></div>
                <div className={styles["delivery-div"]}>
                  <div className={styles["truck-div"]}>
                    <img src={truck} alt="img" />
                  </div>
                  <div>
                    <p className={styles["delivery-text-1"]}>On Delivery</p>
                    <p className={styles["delivery-text-2"]}>
                      Kebun Jeruk, Jakarta Barat
                    </p>
                  </div>
                </div>
                <img className={styles["line-2"]} src={line} alt="img" />
                <div className={styles["delivery-div"]}>
                  <div style={{ opacity: 0.5 }} className={styles["truck-div"]}>
                    <img src={truck} alt="img" />
                  </div>
                  <div>
                    <p
                      style={{ opacity: 0.5 }}
                      className={styles["delivery-text-1"]}
                    >
                      Destination
                    </p>
                    <p
                      style={{ opacity: 0.5 }}
                      className={styles["delivery-text-2"]}
                    >
                      Kebun Mangga, Jakarta Selatan
                    </p>
                  </div>
                </div>
                <button className={styles["aside-right-btn"]}>
                  Check on Map
                </button>
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
