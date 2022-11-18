import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/MyProduct.module.css";
import withNavigate from "../helpers/withNavigate";

import product from "../assets/product3.png";
import chev from "../assets/chevron.png";
import check from "../assets/check.png";

class MyProducts extends Component {
  render() {
    return (
      <Fragment>
        <main className={styles["main-2"]}>
          <main className={styles["main"]}>
            <Header />
            <section className={styles["section-1"]}>
              <h1 className={styles["section-1-header"]}>Profile</h1>
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
                <div>
                  <div className={styles["nav-div-1"]}>
                    <p>My Product</p>{" "}
                    <img className={styles["chev"]} src={chev} alt="img" />
                  </div>
                  <div className={styles["nav-line"]}></div>
                </div>
                <p className={styles["nav-div-2"]}>Selling Product</p>
                <p className={styles["nav-div-2"]}>My Order</p>
              </div>
              <table className={styles["table"]}>
                <tr className={styles["tr-top"]}>
                  <th className={styles["table-text-1"]}>Product</th>
                  <th></th>
                  <th className={styles["table-text-1"]}>Stock Status</th>
                  <th className={styles["table-text-1"]}>Price</th>
                </tr>
                <tr>
                  <th className={styles["product-th"]}>
                    <div className={styles["table-img"]}>
                      <img src={product} alt="img" />
                    </div>
                  </th>
                  <th className={styles["table-text-2"]}>
                    Dining Side Chair in Beige
                  </th>
                  <th>
                    <div className={styles["table-text-3"]}>
                      <img className={styles["check"]} src={check} alt="img" />
                      10 Stock
                    </div>
                  </th>
                  <th className={styles["table-text-4"]}>$765.99</th>
                  <th>
                    <div className={styles["delete-div"]}>
                      <button className={styles["delete-btn"]}>Delete</button>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th className={styles["product-th"]}>
                    <div className={styles["table-img"]}>
                      <img src={product} alt="img" />
                    </div>
                  </th>
                  <th className={styles["table-text-2"]}>
                    Eugene Accent Table 18.9 inches Espresso
                  </th>
                  <th>
                    <div className={styles["table-text-3"]}>
                      <img className={styles["check"]} src={check} alt="img" />
                      10 Stock
                    </div>
                  </th>
                  <th className={styles["table-text-4"]}>$765.99</th>
                  <th>
                    <div className={styles["delete-div"]}>
                      <button className={styles["delete-btn"]}>Delete</button>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th className={styles["product-th"]}>
                    <div className={styles["table-img"]}>
                      <img src={product} alt="img" />
                    </div>
                  </th>
                  <th className={styles["table-text-2"]}>
                    Dining Side Chair in Beige
                  </th>
                  <th>
                    <div className={styles["table-text-3"]}>
                      <img className={styles["check"]} src={check} alt="img" />
                      10 Stock
                    </div>
                  </th>
                  <th className={styles["table-text-4"]}>$765.99</th>
                  <th>
                    <div className={styles["delete-div"]}>
                      <button className={styles["delete-btn"]}>Delete</button>
                    </div>
                  </th>
                </tr>
              </table>
            </section>
            <Footer />
          </main>
        </main>
      </Fragment>
    );
  }
}

const MyProduct = withNavigate(MyProducts);

export default MyProduct;
