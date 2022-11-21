import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/FAQ.module.css";
import withNavigate from "../helpers/withNavigate";

import cart from "../assets/cart2.png";
import wallet from "../assets/wallet.png";
import bill from "../assets/bill.png";

class FAQs extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main className={styles["main-2"]}>
          <main className={styles["main"]}>
            <section className={styles["section-1"]}>
              <div className={styles["section-1-nav"]}>
                <p className={styles["section-1-text"]}>FAQ</p>
                <p className={styles["section-1-arrow"]}>{">"}</p>
              </div>
              <h1 className={styles["section-1-header"]}>FAQ </h1>
              <p className={styles["section-1-text"]}>
                Frequently Asked Questions
              </p>
            </section>
            <section className={styles["section-2"]}>
              <div className={styles["cart-div"]}>
                <img src={cart} alt="img" />
              </div>
              <div className={styles["question-div"]}>
                <div className={styles["question-line"]}></div>
                <h1 className={styles["question-header"]}>
                  Shopping Questions
                </h1>
                <div className={styles["question-line"]}></div>
              </div>
              <div className={styles["faq-div-1"]}>
                <aside>
                  <h1 className={styles["aside-left-header"]}>
                    Do you ship worldwide?
                  </h1>
                  <p className={styles["aside-left-text"]}>
                    This is the third article of a three-part series. I'm
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don't
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </p>
                </aside>
                <aside>
                  <h1 className={styles["aside-left-header"]}>
                    How can I use a coupon code?
                  </h1>
                  <p className={styles["aside-left-text"]}>
                    This is the third article of a three-part series. I'm
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don't
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </p>
                </aside>
              </div>
              <div className={styles["faq-div-2"]}>
                <aside>
                  <h1 className={styles["aside-left-header"]}>
                    Do you offer gift-vouchers?
                  </h1>
                  <p className={styles["aside-left-text"]}>
                    This is the third article of a three-part series. I'm
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don't
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </p>
                </aside>
                <aside>
                  <h1 className={styles["aside-left-header"]}>
                    How can I request a refund?
                  </h1>
                  <p className={styles["aside-left-text"]}>
                    This is the third article of a three-part series. I'm
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don't
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </p>
                </aside>
              </div>
              <div className={styles["cart-div"]}>
                <img src={wallet} alt="img" />
              </div>
              <div className={styles["question-div"]}>
                <div className={styles["question-line"]}></div>
                <h1 className={styles["question-header"]}>Payment Questions</h1>
                <div className={styles["question-line"]}></div>
              </div>
              <div className={styles["faq-div-1"]}>
                <aside>
                  <h1 className={styles["aside-left-header"]}>
                    Do you ship worldwide?
                  </h1>
                  <p className={styles["aside-left-text"]}>
                    This is the third article of a three-part series. I'm
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don't
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </p>
                </aside>
                <aside>
                  <h1 className={styles["aside-left-header"]}>
                    How can I use a coupon code?
                  </h1>
                  <p className={styles["aside-left-text"]}>
                    This is the third article of a three-part series. I'm
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don't
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </p>
                </aside>
              </div>
              <div className={styles["faq-div-2"]}>
                <aside>
                  <h1 className={styles["aside-left-header"]}>
                    Do you offer gift-vouchers?
                  </h1>
                  <p className={styles["aside-left-text"]}>
                    This is the third article of a three-part series. I'm
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don't
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </p>
                </aside>
                <aside>
                  <h1 className={styles["aside-left-header"]}>
                    How can I request a refund?
                  </h1>
                  <p className={styles["aside-left-text"]}>
                    This is the third article of a three-part series. I'm
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don't
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </p>
                </aside>
              </div>
              <div className={styles["cart-div"]}>
                <img src={bill} alt="img" />
              </div>
              <div className={styles["question-div"]}>
                <div className={styles["question-line"]}></div>
                <h1 className={styles["question-header"]}>Payment Questions</h1>
                <div className={styles["question-line"]}></div>
              </div>
              <div className={styles["faq-div-1"]}>
                <aside>
                  <h1 className={styles["aside-left-header"]}>
                    Do you ship worldwide?
                  </h1>
                  <p className={styles["aside-left-text"]}>
                    This is the third article of a three-part series. I'm
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don't
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </p>
                </aside>
                <aside>
                  <h1 className={styles["aside-left-header"]}>
                    How can I use a coupon code?
                  </h1>
                  <p className={styles["aside-left-text"]}>
                    This is the third article of a three-part series. I'm
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don't
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </p>
                </aside>
              </div>
              <div className={styles["faq-div-3"]}>
                <aside>
                  <h1 className={styles["aside-left-header"]}>
                    Do you offer gift-vouchers?
                  </h1>
                  <p className={styles["aside-left-text"]}>
                    This is the third article of a three-part series. I'm
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don't
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </p>
                </aside>
                <aside>
                  <h1 className={styles["aside-left-header"]}>
                    How can I request a refund?
                  </h1>
                  <p className={styles["aside-left-text"]}>
                    This is the third article of a three-part series. I'm
                    illustrating the marketing challenges of
                    PrescottWeddings.com, a small business. If you don't
                    remember anything else about marketing, remember this:
                    Frequency is king.
                  </p>
                </aside>
              </div>
              <h1 className={styles["help-header"]}> You Still Need Help?</h1>
              <button className={styles["contact-btn"]}>Contact Us</button>
            </section>
          </main>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

const FAQ = withNavigate(FAQs);

export default FAQ;
