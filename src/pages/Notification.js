import React, { Component } from "react";

//import css
import styles from "../styles/Notification.module.css";

//import image
import icon_sifa from "../assets/icon_Syifa.png";
import icon_Aisya from "../assets/icon_Aisya.png";
import icon_Aisya_2 from "../assets/icon_Aisyah_2.png";
import icon_online from "../assets/icon_online.png";
import icon_row from "../assets/icon_row.png";

//import component
import Header from "../components/Header";
import Footer from "../components/Footer";

class Notification extends Component {
  render() {
    return (
      <>
        <main className={styles["main"]}>
          <Header />
          <section>
            <div>
              <div className={`${styles["content"]}`}>
                <div className={styles["chat"]}>Chat</div>
                <p className={styles["text"]}>
                  See your notifications for the latest updates
                </p>
              </div>
              <div className={styles['content_chat']}>
                <div className={`${styles['content-left']} col-4`}>
                  <div className={`${styles['content-left-border']} d-flex ps-4 pt-3 `}>
                    <img src={icon_sifa} alt="icon_sifa" />
                    <img
                      className={styles["icon_online"]}
                      src={icon_online}
                      alt="icon_online"
                    />
                    <div className={styles["name"]}>Syifa Guys</div>
                    <div className={styles["online"]}>online</div>
                  </div>
                  <div
                    className={`${styles["content-left-botom"]} d-flex ps-4 pt-3`}
                  >
                    <img src={icon_Aisya} alt="icon_Aisya" />
                    <img
                      className={styles["icon_online_one"]}
                      src={icon_online}
                      alt="icon_online"
                    />
                    <img
                      className={styles["icon_row"]}
                      src={icon_row}
                      alt="icon_online"
                    />
                    <div className={styles["name_sifa"]}>Aisyah 12</div>
                    <div className={styles["online_one"]}>
                      {" "}
                      lorem ipsum dolor sit amet
                    </div>
                  </div>
                  <div
                    className={`${styles["content-left-botom"]} d-flex ps-4 pt-3`}
                  >
                    <img src={icon_Aisya_2} alt="icon_Aisya" />
                    <img
                      className={styles["icon_online_one"]}
                      src={icon_online}
                      alt="icon_online"
                    />
                    <img
                      className={styles["icon_row"]}
                      src={icon_row}
                      alt="icon_online"
                    />
                    <div className={styles["name_sifa"]}>Aisyah 13</div>
                    <div className={styles["online_one"]}>
                      {" "}
                      lorem ipsum dolor sit amet
                    </div>
                  </div>
                </div>
                <div className={`${styles["content-right"]} col-6`}>
                  <div
                    className={`${styles["content-right-border"]} d-flex ps-4 pt-3 `}
                  >
                    <img src={icon_Aisya} alt="icon_Aisya" />
                    <img className={styles['icon_online-aisya']} src={icon_online} alt="icon_online" />
                    <div className={styles['name']}>Syifa Guys</div>
                    <div className={styles['online_aisya']}>online</div>
                  </div>
                  <div
                    className={`${styles["content-right-botom"]} d-flex ps-4 pt-3 `}
                  >
                    <p className={styles["message"]}>White your message</p>
                    <button className={styles["send"]}>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </>
    );
  }
}

export default Notification;
