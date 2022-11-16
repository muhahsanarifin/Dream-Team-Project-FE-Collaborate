import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Register.module.css";

class Register extends Component {
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
              <aside className={styles["section-2-aside-left"]}>
                <h1 className={styles["section-2-aside-left-header-2"]}>
                  Login Account
                </h1>
                <h1 className={styles["section-2-aside-left-header"]}>
                  Register Account
                </h1>
                <div className={styles["line"]}></div>
              </aside>
              <aside className={styles["section-2-aside-right"]}>
                <h1 className={styles["section-2-aside-right-header"]}>
                  Create Account
                </h1>
                <input
                  className={styles["aside-right-input-1"]}
                  type="text"
                  placeholder="Email address*"
                />
                <input
                  className={styles["aside-right-input-2"]}
                  type="text"
                  placeholder="Password *"
                />
                <div className={styles["remember-div"]}>
                  <input type="checkbox" />
                  <p className={styles["remember-text"]}>I'm customer</p>
                  <input type="checkbox" />
                  <p className={styles["remember-text"]}>I'm seller</p>
                </div>
                <button className={styles["button"]}>Register</button>
              </aside>
            </section>
            <Footer />
          </main>
        </main>
      </Fragment>
    );
  }
}

export default Register;
