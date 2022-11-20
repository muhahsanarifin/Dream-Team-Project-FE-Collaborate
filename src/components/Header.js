import React, { Component, Fragment } from "react";
import styles from "../styles/Header.module.css";

import { Link } from "react-router-dom";

import mag from "../assets/mag.png";
import love from "../assets/love.png";
import cart from "../assets/cart.png";
import chev from "../assets/chevron.png";
import bar1 from "../assets/menu-1.png";
import bar2 from "../assets/menu-2.png";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <main className={`${styles["main"]} ${styles["display-main"]}`}>
          <h1 className={styles["header-left"]}>RAZ</h1>
          <div className={styles["header-center"]}>
            <Link to={`/`} className={styles["header-center__link"]}>
              <p className={styles["header-center-text"]}>HOME</p>
            </Link>
            <div className={styles["header-center-div"]}>
              <p className={styles["header-center-text"]}>PAGES</p>
              <img className={styles["chevron"]} src={chev} alt="img" />
            </div>
            <div
              className={`${styles["header-center-div"]} ${styles["header-center-div-shop"]}`}
            >
              <p className={styles["header-center-text"]}>SHOP</p>
              <img className={styles["chevron"]} src={chev} alt="img" />
              <span className={styles["header-center-div__contents"]}>
                <Link to={`/products`} className={styles["link"]}>
                  <p>Orders</p>
                </Link>
                <p>My Product</p>
              </span>
            </div>
            <p className={styles["header-center-text"]}>BLOG</p>
          </div>
          <div className={styles["header-right"]}>
            <span className={styles["header-right-menu"]}>
              <img className={styles["image-1"]} src={mag} alt="img" />
              <img className={styles["image-2"]} src={love} alt="img" />
              <img className={styles["image-3"]} src={cart} alt="img" />
            </span>
            <div className={styles["header-right-toggle"]}>
              <img className={styles["menu-1"]} src={bar1} alt="img" />
              <img className={styles["menu-2"]} src={bar2} alt="img" />
              <img className={styles["menu-3"]} src={bar1} alt="img" />
              <span className={`${styles["header-right-toggle__contents"]}`}>
                <Link to={`/login`} className={styles["link"]}>
                  <p>Login</p>
                </Link>
                <Link to={`/profile`} className={styles["link"]}>
                  <p>Profile</p>
                </Link>
              </span>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default Header;
