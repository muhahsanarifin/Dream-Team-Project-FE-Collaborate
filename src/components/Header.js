import React, { Component, Fragment } from "react";
import styles from "../styles/Header.module.css";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Axios from "axios";
import mag from "../assets/mag.png";
import love from "../assets/love.png";
import cart from "../assets/cart.png";
import chev from "../assets/chevron.png";
import bar1 from "../assets/menu-1.png";
import bar2 from "../assets/menu-2.png";
import withNavigate from "../helpers/withNavigate";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: "none",
      shop: "none",
      menu: "none",
    };
  }

  render() {
    const token = localStorage.getItem("token");
    console.log(typeof token);
    return (
      <Fragment>
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
              <span
                onClick={() => {
                  this.state.pages === "none"
                    ? this.setState({ pages: "block" })
                    : this.setState({ pages: "none" });
                }}
              >
                <p className={styles["header-center-text"]}>PAGES</p>
              </span>
              <img className={styles["chevron"]} src={chev} alt="img" />
              <ul
                style={{ display: this.state.pages }}
                className={styles["header-center-div__contents"]}
              >
                <Link to={`/aboutus`} className={styles["link"]}>
                  <li>About Us</li>
                </Link>
                <Link to={`/contact`} className={styles["link"]}>
                  <li>Contact Us</li>
                </Link>
                <Link to={`/soon`} className={styles["link"]}>
                  <li>Coming Soon</li>
                </Link>
                <Link to={`/faq`} className={styles["link"]}>
                  <li>FAQ Page</li>
                </Link>
              </ul>
            </div>
            <div
              className={`${styles["header-center-div"]} ${styles["header-center-div-shop"]}`}
            >
              <span
                onClick={() => {
                  this.state.shop === "none"
                    ? this.setState({ shop: "block" })
                    : this.setState({ shop: "none" });
                }}
              >
                <p className={styles["header-center-text"]}>SHOP</p>
              </span>
              <img className={styles["chevron"]} src={chev} alt="img" />
              <ul
                style={{ display: this.state.shop }}
                className={styles["header-center-div__contents"]}
              >
                <Link to={`/products`} className={styles["link"]}>
                  <li>Products</li>
                </Link>
                <Link to={`/cart`} className={styles["link"]}>
                  <li>Shopping Chart</li>
                </Link>
                <Link to={`/checkout`} className={styles["link"]}>
                  <li>Checkout</li>
                </Link>
                <Link to={`/profile`} className={styles["link"]}>
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
              <Link to={`/cart`} className={styles["link"]}>
                <img className={styles["image-3"]} src={cart} alt="img" />
              </Link>
            </span>
            <div
              onClick={() => {
                this.state.menu === "none"
                  ? this.setState({ menu: "block" })
                  : this.setState({ menu: "none" });
              }}
              className={styles["header-right-toggle"]}
            >
              <img className={styles["menu-1"]} src={bar1} alt="img" />
              <img className={styles["menu-2"]} src={bar2} alt="img" />
              <img className={styles["menu-3"]} src={bar1} alt="img" />
              <ul
                style={{ display: this.state.menu }}
                className={`${styles["header-right-toggle__contents"]}`}
              >
                {!token ? (
                  <Link
                    to={`/login`}
                    className={styles["link"]}
                    style={{ display: this.props.displayLogin }}
                  >
                    <li>Login</li>
                  </Link>
                ) : null}
                {!token ? (
                  <Link
                    to={`/register`}
                    className={styles["link"]}
                    style={{ display: this.props.displayRegister }}
                  >
                    <li>Register</li>
                  </Link>
                ) : null}
                {token ? (
                  <Link
                    to={`/profile`}
                    className={styles["link"]}
                    style={{ display: this.props.displayProfile }}
                  >
                    <li>Profile</li>
                  </Link>
                ) : null}
                {token ? (
                  <Link to={`/chat`} className={styles["link"]}>
                    <li>Chat</li>
                  </Link>
                ) : null}
                {token ? (
                  <Link to={`/notification`} className={styles["link"]}>
                    <li>Notification</li>
                  </Link>
                ) : null}
                {token ? (
                  <li
                    className={styles["link"]}
                    style={{ display: this.props.displayLogout }}
                    onClick={() => {
                      const url = `${process.env.REACT_APP_DT_BACKEND_HOST}raz/auth/logout`;
                      const config = {
                        headers: {
                          "x-access-token": localStorage.getItem("token"),
                        },
                      };
                      Axios.delete(url, config)
                        .then((res) => {
                          Swal.fire({
                            title: "Logout Success!",
                            timer: 2000,
                            showConfirmButton: false,
                            timerProgressBar: true,
                          }).then((result) => {
                            if (result.dismiss === Swal.DismissReason.timer) {
                              this.props.navigate("/login");
                              localStorage.clear();
                            }
                          });
                        })
                        .catch((err) => {
                          console.log(err);
                          Swal.fire({
                            // title: "Logout Failed!",
                            // showConfirmButton: false,
                            // timer: 1000,
                            title: "Logout Success!",
                            timer: 2000,
                            showConfirmButton: false,
                            timerProgressBar: true,
                          });
                          this.props.navigate("/login");
                          localStorage.clear();
                        });
                    }}
                  >
                    Logout
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default withNavigate(Header);
