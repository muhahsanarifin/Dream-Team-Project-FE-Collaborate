import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/MyOrderSeller.module.css";
import withNavigate from "../helpers/withNavigate";

import chev from "../assets/chevrongrey.png";
import product1 from "../assets/product-picture-1.png";
import product2 from "../assets/product2.png";
import check from "../assets/check.png";

class MyOrderSellers extends Component {
  render() {
    return (
      <Fragment>
        <main className={styles["main-2"]}>
          <main className={styles["main"]}>
            <Header />
            <section className={styles["section-1"]}>
              <h1 className={styles["section-1-header"]}>My Order</h1>
              <p className={styles["section-1-text"]}>
                See your notifications for the latest updates
              </p>
            </section>
            <section className={styles["section-2"]}>
              <div className={styles["profile-nav"]}>
                <p
                  className={styles["nav-div-2"]}
                  onClick={() => {
                    this.props.navigate("/profile/seller");
                  }}
                >
                  Profile
                </p>
                <div
                  onClick={() => {
                    this.props.navigate("/profile/seller/product");
                  }}
                >
                  <div className={styles["nav-div-2"]}>
                    <p>My Product</p>
                    <img className={styles["chev"]} src={chev} alt="img" />
                  </div>
                </div>
                <p
                  className={styles["nav-div-2"]}
                  onClick={() => {
                    this.props.navigate("/profile/seller/product/selling");
                  }}
                >
                  Selling Product
                </p>
                <div>
                  <p
                    className={styles["nav-div-1"]}
                    onClick={() => {
                      this.props.navigate("/profile/seller/order");
                    }}
                  >
                    My Order
                  </p>
                  <div className={styles["nav-line"]}></div>
                </div>
              </div>
              <table className={styles["table"]}>
                <tr>
                  <th className={styles["th-top-text-1"]}>PRODUCTS</th>
                  <th></th>
                  <th className={styles["th-top-text-1"]}>PRICE</th>
                  <th className={styles["th-top-text-1"]}>QUANTITY</th>
                  <th className={styles["th-top-text-1"]}>STATUS ORDER</th>
                  <th className={styles["th-top-text-1"]}>TOTAL</th>
                </tr>
                <tr>
                  <th>
                    <img
                      className={styles["table-img"]}
                      src={product1}
                      alt="img"
                    />
                  </th>
                  <th className={styles["th-text-1"]}>
                    Fabric Mid Century Chair
                  </th>
                  <th className={styles["th-text-2"]}>$10.50</th>
                  <th className={styles["th-text-3"]}>02</th>
                  <th>
                    <div className={styles["th-text-4"]}>
                      <img src={check} alt="img" />
                      Sent
                    </div>
                  </th>
                  <th className={styles["th-text-5"]}>$21.00</th>
                </tr>
                <tr>
                  <th>
                    <img
                      className={styles["table-img"]}
                      src={product2}
                      alt="img"
                    />
                  </th>
                  <th className={styles["th-text-1"]}>Chair in Dark Grey</th>
                  <th className={styles["th-text-2"]}>$10.50</th>
                  <th className={styles["th-text-3"]}>01</th>
                  <th>
                    <div className={styles["th-text-4"]}>
                      <img src={check} alt="img" />
                      Processed
                    </div>
                  </th>
                  <th className={styles["th-text-5"]}>$10.50</th>
                </tr>
              </table>
              <div className={styles["line"]}></div>
            </section>
            <Footer />
          </main>
        </main>
      </Fragment>
    );
  }
}

const MyOrderSeller = withNavigate(MyOrderSellers);

export default MyOrderSeller;
