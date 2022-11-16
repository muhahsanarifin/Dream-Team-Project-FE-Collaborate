import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Forgot.module.css";

class Forgot extends Component {
  render() {
    return (
      <Fragment>
        <main className={styles["main-2"]}>
          <main className={styles["main"]}>
            <Header />
            <section className={styles["section-1"]}>
              <h1 className={styles["section-1-header"]}>My Account</h1>
              <p className={styles["section-1-text"]}>
                Register and log in with your account to be able to shop at will
              </p>
            </section>
            <section className={styles["section-2"]}>
              <aside className={styles["section-2-aside-right"]}>
                <h1 className={styles["section-2-aside-right-header"]}>
                  Forgot your password?
                </h1>
                <p className={styles["section-2-text"]}>
                  Don't worry! Just fill in your email and we'll send you a link
                </p>
                <input
                  className={styles["aside-right-input-1"]}
                  type="text"
                  placeholder="Your email address *"
                />
                <button className={styles["button"]}>Reset Password</button>
              </aside>
            </section>
            <Footer />
          </main>
        </main>
      </Fragment>
    );
  }
}

export default Forgot;
