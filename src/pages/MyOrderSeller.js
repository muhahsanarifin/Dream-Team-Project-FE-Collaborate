import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/SellingProduct.module.css";
import withNavigate from "../helpers/withNavigate";

import chev from "../assets/chevrongrey.png";
import product from "../assets/product4.png";
import add from "../assets/add.png";

class MyOrderSellers extends Component {
  render() {
    return (
      <Fragment>
        <main className={styles["main-2"]}>
          <main className={styles["main"]}>
            <Header />
            <section className={styles["section-1"]}>
              <h1 className={styles["section-1-header"]}>Selling Product</h1>
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
                  <div className={styles["nav-line"]}></div>
                </div>
                <p
                  className={styles["nav-div-1"]}
                  onClick={() => {
                    this.props.navigate("/profile/seller/product/selling");
                  }}
                >
                  Selling Product
                </p>
                <p
                  className={styles["nav-div-2"]}
                  onClick={() => {
                    this.props.navigate("/profile/seller/product/oder");
                  }}
                >
                  My Order
                </p>
              </div>
              <section className={styles["product-section"]}>
                <h1 className={styles["sell-header-1"]}>Inventory</h1>
                <input
                  className={styles["input-1"]}
                  type="text"
                  placeholder="Name of goods *"
                />
                <input
                  className={styles["input-2"]}
                  type="text"
                  placeholder="Description Product *"
                />
                <h1 className={styles["sell-header-1"]}>Item Details</h1>
                <input
                  className={styles["input-1"]}
                  type="text"
                  placeholder="Unit price *"
                />
                <input
                  className={styles["input-1"]}
                  type="text"
                  placeholder="Unit Stock *"
                />
                <p className={styles["sell-text-1"]}>Stock Condition</p>
                <div className={styles["condition-div"]}>
                  <div className={styles["condition-subdiv"]}>
                    <input
                      className={styles["radio"]}
                      type="radio"
                      name="condition"
                    />
                    <p className={styles["sell-text-2"]}>New Product</p>
                  </div>
                  <div className={styles["condition-subdiv"]}>
                    <input
                      className={styles["radio"]}
                      type="radio"
                      name="condition"
                    />
                    <p className={styles["sell-text-2"]}>Second Product</p>
                  </div>
                </div>
                <h1 className={styles["sell-header-1"]}>Photo of Goods</h1>
                <div className={styles["product-div"]}>
                  <img src={product} alt="img" />
                  <div className={styles["add-div"]}>
                    <img src={add} alt="img" />
                    <p className={styles["add-text"]}>Add more image</p>
                  </div>
                </div>
                <button className={styles["sell-btn"]}>Sell Product</button>
              </section>
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
