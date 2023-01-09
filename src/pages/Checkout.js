import React, { useState, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Checkout.module.css";

import chev from "../assets/chevron.png";
import visa from "../assets/visa.png";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { createTransaction } from "../utils/fetcher";
import Modal from "../components/modal/Modal";
import cart from "../redux/action/cart";

const Checkout = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const token = useSelector((state) => state.auth.userInfo.token);
  const checkout = useSelector((state) => state.cart);
  const [body, setBody] = useState({
    name_user: "",
    address: "",
    phone: "",
    payment_method: "",
  });

  const [va, setVa] = useState("");
  const [bank, setBank] = useState("");
  const [open, setOpen] = useState(false);
  const name_user = (e) => {
    setBody({ ...body, name_user: e.target.value });
  };

  const address = (e) => {
    setBody({ ...body, address: e.target.value });
  };

  const phone = (e) => {
    setBody({ ...body, phone: "+62" + e.target.value });
  };

  const handleBank = (e) => {
    if (e.target.value === "BRI") {
      setBody({ ...body, payment_method: "BRI" });
    }
    if (e.target.value === "BCA") {
      setBody({ ...body, payment_method: "BCA" });
    }
    if (e.target.value === "BNI") {
      setBody({ ...body, payment_method: "BNI" });
    }
  };

  const handlePayment = async () => {
    try {
      const data = {
        product_item: checkout.data,
        ...checkout.checkout,
        ...body,
      };
      const result = await createTransaction(data, token);
      const dataPayment = result.data.data.midtrans.va_numbers[0];
      setBank(`${dataPayment.bank}`);
      setVa(`Va Number : ${dataPayment.va_number}`);
      const defaultCart = [];
      dispatch(cart.addCartThunk(defaultCart));
      setOpen(true);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

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
              onChange={name_user}
            />
            <input
              className={styles["input-1"]}
              type="text"
              placeholder="Address *"
              onChange={address}
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
                onChange={phone}
              />
            </div>
            <div className={styles["payment-div"]}>
              <div className={styles["payment-content-div"]}>
                <img src={visa} alt="img" />
                {/* <p>Pay with Visa</p> */}
              </div>
              {/* <img src={chev} alt="img" /> */}
              <select className={styles["drop_pay"]} onChange={handleBank}>
                <option value="">Pay with Visa</option>
                <option value="BRI">Bank BRI</option>
                <option value="BCA">Bank BCA</option>
                <option value="BNI">Bank BNI</option>
              </select>
            </div>
            <button className={styles["checkout-btn"]} onClick={handlePayment}>
              Check Out
            </button>
          </section>
          <Footer />
        </main>
      </main>
      <Modal open={open} setOpen={setOpen} title={bank} body={va} />
    </Fragment>
  );
};

export default Checkout;
