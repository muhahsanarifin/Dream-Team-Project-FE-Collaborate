import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/MyOrderSeller.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import Axios from "axios";
import orderAction from "../redux/action/order";

import chev from "../assets/chevrongrey.png";

export default function MyOrderSellers() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const data = useSelector((state) => state.order.orders);
  // const [data, setData] = useState();
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    const config = {
      headers: {
        "x-access-token": auth.userInfo.token,
      },
    };
    if (auth.userInfo.roles === "seller") {
      dispatch(orderAction.getOrderSellerThunk(config));
    } else {
      dispatch(orderAction.getOrderSellerThunk(config));
    }

    // console.log(auth);
    // let url;
    // if (auth.userInfo.roles === "seller") {
    //   url = `https://dream-team-project-be.vercel.app/raz/transaction/checkout-seller`;
    // } else {
    //   url = `https://dream-team-project-be.vercel.app/raz/transaction/checkout-customer`;
    // }
    // Axios.get(url, config)
    //   .then((res) => {
    //     console.log(res.data.data);
    //     setData(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [dispatch, auth.userInfo.roles, auth.userInfo.token]);

  return (
    <>
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
                  navigate("/profile/seller");
                }}
              >
                Profile
              </p>
              <div
                onClick={() => {
                  navigate("/profile/seller/product");
                }}
              >
                <div
                  className={
                    auth.userInfo.roles === "seller"
                      ? styles["nav-div-2"]
                      : styles["nav-div-3"]
                  }
                >
                  <p>My Product</p>
                  <img className={styles["chev"]} src={chev} alt="img" />
                </div>
              </div>
              <p
                className={
                  auth.userInfo.roles === "seller"
                    ? styles["nav-div-2"]
                    : styles["nav-div-3"]
                }
                onClick={() => {
                  navigate("/profile/seller/product/selling");
                }}
              >
                Selling Product
              </p>
              <div>
                <p
                  className={styles["nav-div-1"]}
                  onClick={() => {
                    navigate("/profile/seller/order");
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
              {data.length === 0 ? (
                <tr>
                  <th>Your Cart is empty....</th>
                </tr>
              ) : (
                data.map((item) => {
                  return (
                    <tr>
                      <th>
                        <img
                          className={styles["table-img"]}
                          src={item.image}
                          alt="img"
                        />
                      </th>
                      <th className={styles["th-text-1"]}>
                        {item.product_name}
                      </th>
                      <th className={styles["th-text-2"]}>Rp.{item.price}</th>
                      <th className={styles["th-text-3"]}>{item.quantity}</th>
                      <th>
                        <div className={styles["th-text-4"]}>
                          {item.status_order}
                        </div>
                      </th>
                      <th className={styles["th-text-5"]}>
                        Rp.{item.price * item.quantity}
                      </th>
                    </tr>
                  );
                })
              )}
            </table>
            <div className={styles["line"]}></div>
          </section>
          <Footer />
        </main>
      </main>
    </>
  );
}

// const MyOrderSeller = withNavigate(MyOrderSellers);

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     auth: state.auth,
//   };
// };

// export default connect(mapStateToProps)(MyOrderSeller);
