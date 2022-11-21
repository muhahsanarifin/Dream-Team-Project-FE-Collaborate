import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Cart.module.css";
import cartEmpty from "../assets/shopping-cart.png";

import remove from "../assets/remove.png";
import { useDispatch, useSelector } from "react-redux";
import counterActions from "../redux/action/counterProduct";
import cart from "../redux/action/cart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const cartData = useSelector((state) => state.cart.data);
  // const image = useSelector((state) => state.products.productsDetails.images)
  // const counter = useSelector((state) => state.counter.number);
  // const price = useSelector((state) => state.products.productsDetails.price);
  const onClickHandler = (action) => {
    dispatch(action);
  };

  const [body, setBody] = useState({
    shipping_method_id: 1,
    total_price:null,
    total_priceString :'',
    sub_total:null
  });


  const handleDelete = (id) => {
    console.log(id);
    let temp = [...cartData];
    temp.splice(id, 1);
    console.log(temp);
    dispatch(cart.addCartThunk(temp));
  };

  const rupiah = (number) => {
    if (number) {
      return `IDR ${number
        .toString()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`;
    }
  };

  const subtotal = () => {
    let temp = 0;
    cartData.map((item, idx) => {
      temp += item.price;
    });
    const value = rupiah(temp);
    return value;
  };

  const handleShipping_method = (e) => {
    console.log(e.target.value==1);
    let temp = 0;
    cartData.map((item, idx) => {
      temp += item.price;
    });

    let total = temp ;
    console.log(body.shipping_method_id);
    if (e.target.value == 1){
      total += 10000
    }
    const value = rupiah(total);
    setBody({ ...body, shipping_method_id: e.target.value,total_price:total, total_priceString:value, sub_total:temp });
  };

  const  handleCheckout =()=>{
    if(body.total_price===null){
      return alert('belom diitung')
    }
    console.log(body);
    dispatch(cart.dataCheckoutThunk(body));
    navigate('/checkout')
  }
  

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
                      {subtotal()}
                    </p>
                  </div>
                  <div className={styles["shipping-div"]}>
                    <p className={styles["cart-total-header-2"]}>Shipping</p>
                    <div>
                      <div className={styles["shipping-choose"]}>
                        <input
                          className={styles["shipping-btn"]}
                          type="radio"
                          onChange={handleShipping_method}
                          value={1}
                          name="shippping_method_id"
                        ></input>
                        <p className={styles["choose-text"]}>Flate rate: $10</p>
                      </div>
                      <div className={styles["shipping-choose"]}>
                        <input
                          className={styles["shipping-btn"]}
                          type="radio"
                          onChange={handleShipping_method}
                          value={2}
                          name="shippping_method_id"
                        ></input>
                        <p className={styles["choose-text"]}>Free shipping</p>
                      </div>
                      <div className={styles["shipping-choose"]}>
                        <input
                          className={styles["shipping-btn"]}
                          type="radio"
                          onChange={handleShipping_method}
                          value={3}
                          name="shippping_method_id"
                        ></input>
                        <p className={styles["choose-text"]}>Local pickup</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["line-2"]}></div>
                  <div className={styles["total-div"]}>
                    <p className={styles["cart-total-header-2"]}>Total Price</p>
                    <p className={styles["cart-total-header"]}>
                    {body.total_priceString}
                    </p>
                  </div>
                </div>
                <button className={styles["proceed-button"]} onClick={handleCheckout}>
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
