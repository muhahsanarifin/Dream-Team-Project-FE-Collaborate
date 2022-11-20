import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Cart.module.css";

import remove from "../assets/remove.png";
import product1 from "../assets/product-picture-1.png";
import product2 from "../assets/product2.png";

class Cart extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main className={styles["main-2"]}>
          <main className={styles["main"]}>
            <section className={styles["section-1"]}>
              <div className={styles["section-1-nav"]}>
                <p className={styles["section-1-text"]}>Cart</p>
                <p className={styles["section-1-arrow"]}>{">"}</p>
              </div>
              <h1 className={styles["section-1-header"]}>Your Cart</h1>
              <p className={styles["section-1-text"]}>
                Buy everything in your cart now!
              </p>
            </section>
            <section className={styles["section-2"]}>
              <aside className={styles["aside-left"]}>
                <table className={styles["table"]}>
                  <tr>
                    <th className={styles["header-th-1"]}>PRODUCTS</th>
                    <th className={styles["header-th-2"]}>PRICE</th>
                    <th className={styles["header-th-3"]}>QUANTITY</th>
                    <th className={styles["header-th-4"]}>TOTAL</th>
                  </tr>
                  <tr>
                    <th className={styles["product-th"]}>
                      <img
                        className={styles["remove"]}
                        src={remove}
                        alt="img"
                      />
                      <img
                        className={styles["product-image"]}
                        src={product1}
                        alt="img"
                      />
                      <p className={styles["cart-text"]}>
                        Fabric Mid Century Chair
                      </p>
                    </th>
                    <th className={styles["th-price"]}>$10.50</th>
                    <th className={styles["count-th"]}>
                      <p className={styles["counter-p"]}>-</p>
                      <p className={styles["amount-p"]}>02</p>
                      <p className={styles["counter-p"]}>+</p>
                    </th>
                    <th className={styles["total-text"]}>$21.00</th>
                  </tr>
                  <tr>
                    <th className={styles["product-th"]}>
                      <img
                        className={styles["remove"]}
                        src={remove}
                        alt="img"
                      />
                      <img
                        className={styles["product-image"]}
                        src={product2}
                        alt="img"
                      />
                      <p className={styles["cart-text"]}>Chair in Dark Grey</p>
                    </th>
                    <th className={styles["th-price"]}>$10.50</th>
                    <th className={styles["count-th"]}>
                      <p className={styles["counter-p"]}>-</p>
                      <p className={styles["amount-p"]}>01</p>
                      <p className={styles["counter-p"]}>+</p>
                    </th>
                    <th className={styles["total-text"]}>$10.50</th>
                  </tr>
                </table>
                <div className={styles["line"]}></div>
                <div className={styles["cart-bottom-div"]}>
                  <div className={styles["apply-div"]}>
                    <input
                      className={styles["coupon-input"]}
                      type="text"
                      placeholder="Enter your coupon code"
                    />
                    <button className={styles["coupon-btn"]}>
                      Apply Coupon
                    </button>
                  </div>
                  <div className={styles["clear-div"]}>
                    <p className={styles["clear"]}>Clear Cart</p>
                    <p className={styles["update"]}>Update Cart</p>
                  </div>
                </div>
              </aside>
              <aside className={styles["aside-right"]}>
                <div className={styles["aside-right-div-1"]}>
                  <h1 className={styles["cart-total-header-1"]}>Cart Total</h1>
                  <div className={styles["subtotal-div"]}>
                    <p className={styles["cart-total-header-2"]}>Subtotal</p>
                    <p className={styles["cart-total-header-2"]}>$125</p>
                  </div>
                  <div className={styles["shipping-div"]}>
                    <p className={styles["cart-total-header-2"]}>Shipping</p>
                    <div>
                      <div className={styles["shipping-choose"]}>
                        <div className={styles["shipping-btn"]}></div>
                        <p className={styles["choose-text"]}>Flate rate: $10</p>
                      </div>
                      <div className={styles["shipping-choose"]}>
                        <div className={styles["shipping-btn"]}></div>
                        <p className={styles["choose-text"]}>Free shipping</p>
                      </div>
                      <div className={styles["shipping-choose"]}>
                        <div className={styles["shipping-btn"]}></div>
                        <p className={styles["choose-text"]}>Local pickup</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["line-2"]}></div>
                  <div className={styles["total-div"]}>
                    <p className={styles["cart-total-header-2"]}>Total Price</p>
                    <p className={styles["cart-total-header"]}>$125</p>
                  </div>
                </div>
                <button className={styles["proceed-button"]}>
                  Proceed To Check Out
                </button>
              </aside>
            </section>
          </main>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Cart;
