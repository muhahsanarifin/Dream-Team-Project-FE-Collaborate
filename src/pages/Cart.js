import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Cart.module.css";
import cartEmpty from "../assets/shopping-cart.png";

import remove from "../assets/remove.png";
import { useDispatch, useSelector } from "react-redux";
import counterActions from "../redux/action/counterProduct";
import cart from "../redux/action/cart";
const Cart = () => {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart.data);
  // const image = useSelector((state) => state.products.productsDetails.images)
  const counter = useSelector((state) => state.counter.number);
  const price = useSelector((state) => state.products.productsDetails.price);
  const onClickHandler = (action) => {
    dispatch(action);
  };
  const handleDelete = (id) => {
    console.log(id);
    let temp = [...cartData];
    temp.splice(id, 1);
    console.log(temp);
    dispatch(cart.addCartThunk(temp));
  };

  return (
    <>
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
          {cartData.length === 0 ? (
            <section>
              <section>
                <img src={cartEmpty} alt=""></img>
              </section>
              <div>
                <p>Your Cart is Empty</p>
                <p>
                  Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                  Quisque a nunc vel diam auctor commodo. urabitur blandit ultri
                </p>
              </div>
            </section>
          ) : (
            <section className={styles["section-2"]}>
              <aside className={styles["aside-left"]}>
                <table className={styles["table"]}>
                  <tr>
                    <th></th>
                    <th className={styles["header-th-1"]}>PRODUCTS</th>
                    <th></th>
                    <th className={styles["header-th-2"]}>PRICE</th>
                    <th className={styles["header-th-3"]}>QUANTITY</th>
                    <th className={styles["header-th-4"]}>TOTAL</th>
                  </tr>
                  {cartData.map((item, index) => {
                    return (
                      <tr className={styles["product-tr"]} key={index}>
                        <th>
                          <img
                            className={styles["remove"]}
                            src={remove}
                            alt="img"
                            onClick={() => handleDelete(index)}
                          />
                        </th>
                        <th>
                          <img
                            className={styles["product-image"]}
                            src={item.image}
                            alt="img"
                          />
                        </th>
                        <th className={styles["product-th"]}>
                          <p className={styles["cart-text"]}>
                            {item.product_name}
                          </p>
                        </th>
                        <th className={styles["th-price"]}>{item.price}</th>
                        <th className={styles["count-th"]}>
                          <p
                            onClick={() =>
                              onClickHandler(counterActions.counterDown())
                            }
                            className={styles["counter-p"]}
                          >
                            -
                          </p>
                          <p className={styles["amount-p"]}>{item.quantity}</p>
                          <p
                            onClick={() =>
                              onClickHandler(counterActions.counterUp())
                            }
                            className={styles["counter-p"]}
                          >
                            +
                          </p>
                        </th>
                        <th className={styles["total-text"]}>
                          {item.total_price}
                        </th>
                      </tr>
                    );
                  })}
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
                    <p className={styles["cart-total-header-2"]}>
                      {counter * price}
                    </p>
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
                    <p className={styles["cart-total-header"]}>
                      {counter * price}
                    </p>
                  </div>
                </div>
                <button className={styles["proceed-button"]}>
                  Proceed To Check Out
                </button>
              </aside>
            </section>
          )}
        </main>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
