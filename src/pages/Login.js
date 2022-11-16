import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Login.module.css";

import logrec from "../assets/logrec.png";

class Login extends Component {
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
                <h1 className={styles["section-2-aside-left-header"]}>
                  Login Account
                </h1>
                <img className={styles["icon-img"]} src={logrec} alt="img" />
                <h1 className={styles["section-2-aside-left-header-2"]}>
                  Register Account
                </h1>
              </aside>
              <aside className={styles["section-2-aside-right"]}>
                <h1 className={styles["section-2-aside-right-header"]}>
                  Login
                </h1>
                <input
                  className={styles["aside-right-input-1"]}
                  type="text"
                  placeholder="User name or email address *"
                />
                <input
                  className={styles["aside-right-input-2"]}
                  type="text"
                  placeholder="Password *"
                />
                <button className={styles["button"]}>Login</button>
                <div className={styles["remember-div"]}>
                  <input type="checkbox" />
                  <p className={styles["remember-text"]}>Remember me</p>
                  <p className={styles["forget"]}>Forget your password?</p>
                </div>
              </aside>
            </section>
            <Footer />
          </main>
        </main>
      </Fragment>
    );
  }
}

export default Login;
