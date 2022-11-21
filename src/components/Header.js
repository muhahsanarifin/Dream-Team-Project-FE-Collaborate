import styles from "../styles/Header.module.css";

import { Link } from "react-router-dom";

import mag from "../assets/mag.png";
import love from "../assets/love.png";
import cart from "../assets/cart.png";
import chev from "../assets/chevron.png";
import bar1 from "../assets/menu-1.png";
import bar2 from "../assets/menu-2.png";

import React from "react";

const Header = ({ linkToProfile, displayRegister, displayProfile }) => {
  return (
    <>
      <main className={`${styles["main"]} ${styles["display-main"]}`}>
        <h1 className={styles["header-left"]}>RAZ</h1>
        <div className={styles["header-center"]}>
          <Link to={`/`} className={styles["header-center__link"]}>
            <span>
              <p className={styles["header-center-text"]}>HOME</p>
            </span>
          </Link>
          <div
            className={`${styles["header-center-div"]} ${styles["header-center-div-page"]}`}
          >
            <span>
              <p className={styles["header-center-text"]}>PAGES</p>
            </span>
            <img className={styles["chevron"]} src={chev} alt="img" />
            <ul className={styles["header-center-div__contents"]}>
              <Link to={`/`} className={styles["link"]}>
                <li>About Us</li>
              </Link>
              <Link to={`/`} className={styles["link"]}>
                <li>Contact Us</li>
              </Link>
              <Link to={`/`} className={styles["link"]}>
                <li>Coming Soon</li>
              </Link>
              <Link to={`/`} className={styles["link"]}>
                <li>404 Page</li>
              </Link>
              <Link to={`/faq`} className={styles["link"]}>
                <li>FAQ Page</li>
              </Link>
            </ul>
          </div>
          <div
            className={`${styles["header-center-div"]} ${styles["header-center-div-shop"]}`}
          >
            <span>
              <p className={styles["header-center-text"]}>SHOP</p>
            </span>
            <img className={styles["chevron"]} src={chev} alt="img" />
            <ul className={styles["header-center-div__contents"]}>
              <Link to={`/products`} className={styles["link"]}>
                <li>Products</li>
              </Link>
              <Link to={`/`} className={styles["link"]}>
                <li>Shopping Chart</li>
              </Link>
              <Link to={`/checkout`} className={styles["link"]}>
                <li>Checkout</li>
              </Link>
              <Link to={`/`} className={styles["link"]}>
                <li>My Account</li>
              </Link>
              <Link to={`/tracking`} className={styles["link"]}>
                <li>Order Tracking</li>
              </Link>
            </ul>
          </div>
          <Link to={`/blog`} className={styles["header-center__link"]}>
            <span>
              <p className={styles["header-center-text"]}>BLOG</p>
            </span>
          </Link>
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

            <ul className={`${styles["header-right-toggle__contents"]}`}>
              <Link to={`/login`} className={styles["link"]}>
                <li>Login</li>
              </Link>
              <Link
                to={`/register`}
                className={styles["link"]}
                style={{ display: { displayRegister } }}
              >
                <li>Register</li>
              </Link>
              <Link
                to={linkToProfile}
                className={styles["link"]}
                style={{ display: { displayProfile } }}
              >
                <li>Profile</li>
              </Link>
              <Link to={`/`} className={styles["link"]}>
                <li>Chat</li>
              </Link>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
