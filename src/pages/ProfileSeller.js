import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/ProfileSeller.module.css";
import Swal from "sweetalert2";
import Axios from "axios";
import withNavigate from "../helpers/withNavigate";

import profile from "../assets/profile.png";
import edit from "../assets/edit.png";
import editwhite from "../assets/edit-white.png";
import editb from "../assets/editb.png";
import logout from "../assets/logout.png";
import chev from "../assets/chevrongrey.png";

class ProfileSellers extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `http://localhost:8090/raz/auth/logout`;
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
          }
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Logout Failed!",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  }

  render() {
    return (
      <Fragment>
        <main className={styles["main-2"]}>
          <main className={styles["main"]}>
            <Header />
            <section className={styles["section-1"]}>
              <h1 className={styles["section-1-header"]}>Profile</h1>
              <p className={styles["section-1-text"]}>
                See your notifications for the latest updates
              </p>
            </section>
            <section className={styles["section-2"]}>
              <div className={styles["profile-nav"]}>
                <p
                  className={styles["nav-div-2"]}
                  onClick={() => {
                    this.props.navigate("/profile/seller");
                  }}
                >
                  Profile
                </p>
                <div
                  onClick={() => {
                    this.props.navigate("/profile/seller/product");
                  }}
                >
                  <div className={styles["nav-div-2"]}>
                    <p>My Product</p>
                    <img className={styles["chev"]} src={chev} alt="img" />
                  </div>
                  <div className={styles["nav-line"]}></div>
                </div>
                <p
                  className={styles["nav-div-1"]}
                  onClick={() => {
                    this.props.navigate("/profile/seller/product/selling");
                  }}
                >
                  Selling Product
                </p>
                <p
                  className={styles["nav-div-2"]}
                  onClick={() => {
                    this.props.navigate("/profile/seller/product/oder");
                  }}
                >
                  My Order
                </p>
              </div>
              <div className={styles["profile-div"]}>
                <div className={styles["profile-image-div"]}>
                  <img className={styles[""]} src={profile} alt="img" />
                  <div className={styles["profile-image-edit"]}>
                    <p>EDIT</p>
                    <img className={styles[""]} src={editwhite} alt="img" />
                  </div>
                </div>
                <div>
                  <div className={styles["profile-top-header-div"]}>
                    <h1 className={styles["profile-top-header"]}>Syifa</h1>
                    <img className={styles[""]} src={edit} alt="img" />
                  </div>
                  <p className={styles["profile-top-text"]}>as Seller</p>
                </div>
              </div>
              <div className={styles["section-3-div"]}>
                <div>
                  <label className={styles["section-3-label"]}>Gender</label>
                  <p className={styles["section-3-text"]}>Female</p>
                </div>
                <div className={styles["section-3-edit"]}>
                  <p>EDIT</p>
                  <img className={styles[""]} src={editb} alt="img" />
                </div>
              </div>
              <div className={styles["section-3-div"]}>
                <div>
                  <label className={styles["section-3-label"]}>
                    Your Email
                  </label>
                  <p className={styles["section-3-text"]}>syifa@gamil.com</p>
                </div>
                <div className={styles["section-3-edit"]}>
                  <p>EDIT</p>
                  <img className={styles[""]} src={editb} alt="img" />
                </div>
              </div>
              <div className={styles["section-3-div"]}>
                <div>
                  <label className={styles["section-3-label"]}>
                    Store Name
                  </label>
                  <p className={styles["section-3-text"]}>Apple Store</p>
                </div>
                <div className={styles["section-3-edit"]}>
                  <p>EDIT</p>
                  <img className={styles[""]} src={editb} alt="img" />
                </div>
              </div>
              <div className={styles["section-3-div"]}>
                <div>
                  <label className={styles["section-3-label"]}>
                    Store Description
                  </label>
                  <p className={styles["section-3-text"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className={styles["section-3-edit"]}>
                  <p>EDIT</p>
                  <img className={styles[""]} src={editb} alt="img" />
                </div>
              </div>
              <form onSubmit={this.handleSubmit}>
                <button className={styles["logout"]}>
                  <img className={styles[""]} src={logout} alt="img" />
                  <p>Logout</p>
                </button>
              </form>
            </section>
            <Footer />
          </main>
        </main>
      </Fragment>
    );
  }
}

const ProfileSeller = withNavigate(ProfileSellers);

export default ProfileSeller;
