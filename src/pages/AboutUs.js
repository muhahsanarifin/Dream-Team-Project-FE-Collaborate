import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/AboutUs.module.css";

import meet1 from "../assets/meet1.png";
import meet2 from "../assets/meet2.png";
import meet3 from "../assets/meet3.png";
import bottom1 from "../assets/bottom1.png";
import about1 from "../assets/about1.png";

class AboutUs extends Component {
  render() {
    return (
      <Fragment>
        <main className={styles["main-2"]}>
          <main className={styles["main"]}>
            <Header />
            <section className={styles["section-1"]}>
              <div className={styles["section-1-nav"]}>
                <p className={styles["section-1-text"]}>About</p>
                <p className={styles["section-1-arrow"]}>{">"}</p>
              </div>
              <h1 className={styles["section-1-header"]}>About Us</h1>
              <p className={styles["section-1-text"]}></p>
            </section>
            <section className={styles["section-2"]}>
              <div className={styles["section-2-div-1"]}>
                <aside>
                  <h1 className={styles["div-1-header-1"]}>
                    RAZ- Modern Furniture
                  </h1>
                  <p className={styles["div-1-text-1"]}>
                    Quisque at justo sagittis, semper lacus a, iaculis tellus.
                    Fusce tempor, leo vel iaculis aliquet, dui turpis maximus
                    tellus, commodo congue Nam fermentum, augue eget pulvinar
                    ullamcorper, dui purus ornare nibh, eu congue ligula felis
                    nec diam liquam mollis nibh eu
                  </p>
                  <div className={styles["list-1"]}>
                    <div className={styles["dot"]}></div>
                    <p className={styles["list-1-text"]}>
                      Fusce risus ligula, semper et ultricies vitae
                    </p>
                  </div>
                  <div className={styles["list-2"]}>
                    <div className={styles["dot"]}></div>
                    <p className={styles["list-1-text"]}>
                      Fusce risus ligula, semper et ultricies vitae
                    </p>
                  </div>
                  <p className={styles["div-1-text-2"]}>
                    Fusce risus ligula, semper et ultricies vitae, bibendum non
                    nisl. Nunc in libero quis felis congue molestie eu et velit.
                    Praesent gravida magna eget interdum iaculis. Aliquam erat
                    volutpat. Integer placerat ipsum quis malesuada vehicula.
                    Vestibulum
                  </p>
                </aside>
                <aside>
                  <div className={styles["about-image-div-1"]}>
                    <img
                      className={styles["about-img"]}
                      src={about1}
                      alt="img"
                    />
                  </div>
                </aside>
              </div>
              <div>
                <h1 className={styles["why-header-2"]}>
                  Why Should Choose Us?
                </h1>
                <div className={styles["why-div-1"]}>
                  <div>
                    <h1 className={styles["why-header-1"]}>Unique Design</h1>
                    <p className={styles["why-text-1"]}>
                      Fusce risus ligula, semper et ultricies vitae, bibendum
                      non nisl. Nunc in libero quis felis congue
                    </p>
                  </div>
                  <div>
                    <h1 className={styles["why-header-1"]}>
                      Good Wararanty Policy
                    </h1>
                    <p className={styles["why-text-1"]}>
                      Fusce risus ligula, semper et ultricies vitae, bibendum
                      non nisl. Nunc in libero quis felis congue
                    </p>
                  </div>
                  <div>
                    <h1 className={styles["why-header-1"]}>
                      Handcrafted Quality
                    </h1>
                    <p className={styles["why-text-1"]}>
                      Fusce risus ligula, semper et ultricies vitae, bibendum
                      non nisl. Nunc in libero quis felis congue
                    </p>
                  </div>
                </div>
                <div className={styles["why-div-2"]}>
                  <div>
                    <h1 className={styles["why-header-1"]}>
                      Dedicated Support
                    </h1>
                    <p className={styles["why-text-1"]}>
                      Fusce risus ligula, semper et ultricies vitae, bibendum
                      non nisl. Nunc in libero quis felis congue
                    </p>
                  </div>
                  <div>
                    <h1 className={styles["why-header-1"]}>Amazing Features</h1>
                    <p className={styles["why-text-1"]}>
                      Fusce risus ligula, semper et ultricies vitae, bibendum
                      non nisl. Nunc in libero quis felis congue
                    </p>
                  </div>
                  <div>
                    <h1 className={styles["why-header-1"]}>Easy Customized</h1>
                    <p className={styles["why-text-1"]}>
                      Fusce risus ligula, semper et ultricies vitae, bibendum
                      non nisl. Nunc in libero quis felis congue
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles["meet-div-main"]}>
                <h1 className={styles["meet-header-1"]}>Meet Our Team</h1>
                <div className={styles["meet-div-1"]}>
                  <div>
                    <img className={styles["meet-img"]} src={meet1} alt="img" />
                    <h1 className={styles["meet-header-2"]}>Ainsley Amanda</h1>
                    <p className={styles["meet-text-1"]}>CEO-Founder</p>
                  </div>
                  <div>
                    <img className={styles["meet-img"]} src={meet2} alt="img" />
                    <h1 className={styles["meet-header-2"]}>Maude Norman</h1>
                    <p className={styles["meet-text-1"]}>Art Director</p>
                  </div>
                  <div>
                    <img className={styles["meet-img"]} src={meet3} alt="img" />
                    <h1 className={styles["meet-header-2"]}>Connor Shelton</h1>
                    <p className={styles["meet-text-1"]}>Connor Shelton</p>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["bottom-section"]}>
              <p className={styles["bottom-text-1"]}>
                “Gave 5 stars for excellent customer service. I had a couple of
                questions which they replied quickly to answer. If I could give
                multiple reasons for my rating it would also be for the design
                quality and customization to go along with the great service.
                The theme is excellent, keep up the great work."
              </p>
              <img className={styles["bottom-img"]} src={bottom1} alt="img" />
              <p className={styles["bottom-text-2"]}>
                Trevor Rivera - Calinofrnia
              </p>
              <div className={styles["circle-div"]}>
                <div className={styles["circle-1"]}></div>
                <div className={styles["circle-2"]}></div>
              </div>
            </section>
            <Footer />
          </main>
        </main>
      </Fragment>
    );
  }
}

export default AboutUs;
