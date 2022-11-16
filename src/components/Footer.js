import React, { Component, Fragment } from "react";
import styles from "../styles/Footer.module.css";

import face from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import drib from "../assets/dribbble.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import clock from "../assets/clock.png";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <main className={styles["main"]}>
          <section className={styles["section-1"]}>
            <aside>
              <h1 className={styles["aside-left-header-1"]}>RAZ</h1>
              <p className={styles["aside-left-text"]}>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                Quisque a nunc vel diam auctor commodo.
              </p>
              <div className={styles["icon-div"]}>
                <div className={styles["icon"]}>
                  <img className={styles["icon-img"]} src={face} alt="img" />
                </div>
                <div className={styles["icon"]}>
                  <img className={styles["icon-img"]} src={twitter} alt="img" />
                </div>
                <div className={styles["icon"]}>
                  <img className={styles["icon-img"]} src={youtube} alt="img" />
                </div>
                <div className={styles["icon"]}>
                  <img className={styles["icon-img"]} src={drib} alt="img" />
                </div>
              </div>
            </aside>
            <aside className={styles["aside-center"]}>
              <aside>
                <h1 className={styles["aside-center-header"]}>COMPANY</h1>
                <p className={styles["aside-center-text"]}>ABOUT US</p>
                <p className={styles["aside-center-text"]}>HELP CENTER</p>
                <p className={styles["aside-center-text"]}>LICENSES</p>
                <p className={styles["aside-center-text"]}>MARKET API</p>
                <p className={styles["aside-center-text"]}>SITE MAP</p>
              </aside>
              <aside>
                <h1 className={styles["aside-center-header"]}>USEFUL</h1>
                <p className={styles["aside-center-text"]}>THE COLLECTIONS</p>
                <p className={styles["aside-center-text"]}>SIZE GUIDE</p>
                <p className={styles["aside-center-text"]}>LOOKBOOK</p>
                <p className={styles["aside-center-text"]}>INSTAGRAM SHOP</p>
              </aside>
            </aside>
            <aside>
              <h1 className={styles["aside-center-header"]}>CONTACT US</h1>
              <div className={styles["aside-right-div"]}>
                <div className={styles["contact-div"]}>
                  <div className={styles["contact-icon"]}>
                    <img className={styles["icon-img"]} src={mail} alt="img" />
                  </div>
                  <p className={styles["contact-text"]}>
                    info@la-studioweb.com
                  </p>
                </div>
                <div className={styles["contact-div"]}>
                  <div className={styles["contact-icon"]}>
                    <img className={styles["icon-img"]} src={phone} alt="img" />
                  </div>
                  <p className={styles["contact-text"]}>+44.954.954.86</p>
                </div>
                <div className={styles["contact-div"]}>
                  <div className={styles["contact-icon"]}>
                    <img className={styles["icon-img"]} src={clock} alt="img" />
                  </div>
                  <div>
                    <p className={styles["contact-text"]}>9:00am - 19:00pm</p>
                    <p className={styles["contact-text"]}>Monday - Sunday</p>
                  </div>
                </div>
              </div>
            </aside>
          </section>
          <p className={styles["copy"]}>© 2019 RAZ Store All rights reserved</p>
        </main>
      </Fragment>
    );
  }
}

export default Footer;
