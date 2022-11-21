import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Profile.module.css";
import Swal from "sweetalert2";
import Axios from "axios";
import withNavigate from "../helpers/withNavigate";
import jwt from "jwt-decode";

import def from "../assets/default.png";
import edit from "../assets/edit.png";
// import editwhite from "../assets/edit-white.png";
import editb from "../assets/editb.png";
import logout from "../assets/logout.png";

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      role: undefined,
      gender: undefined,
      email: undefined,
      file: undefined,
      image: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
  }

  componentDidMount() {
    document.title = "Profile";
    const token = localStorage.getItem("token");
    const info = jwt(token);
    const url = `${process.env.REACT_APP_DT_BACKEND_HOST}raz/users/profile`;
    const config = {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    };
    Axios.get(url, config)
      .then((res) => {
        console.log(res.data.data[0]);
        this.setState({
          username: res.data.data[0].username,
          role: res.data.data[0].role,
          gender: res.data.data[0].gender,
          email: res.data.data[0].email,
          desc: res.data.data[0].store_description,
          image: res.data.data[0].image,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(info);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `${process.env.REACT_APP_DT_BACKEND_HOST}raz/auth/logout`;
    const config = {
      headers: {
        "x-access-token": localStorage.getItem("token")
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
          title: "Logout Failed!",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  }

  handleSubmit2(event) {
    event.preventDefault();
    const url = `${process.env.REACT_APP_DT_BACKEND_HOST}raz/users/profile/edit`;
    const formdata = new FormData();
    // const body = {
    //   username: this.state.username,
    //   gender: this.state.gender,
    //   store_description: this.state.desc,
    //   image: this.state.file,
    // };
    formdata.append("username", this.state.username);
    formdata.append("gender", this.state.gender);
    formdata.append("store_description", this.state.desc);
    formdata.append("image", this.state.file);
    const body = formdata;
    const config = {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    };
    Axios.patch(url, body, config)
      .then((res) => {
        Swal.fire({
          title: "Data changed successfully!",
          timer: 2000,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            window.location.reload();
          }
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Data not valid!",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  }

  handleFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
    this.setState({
      file: event.target.files[0],
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
              <div className={styles["profile-div"]}>
                <label for="upload" className={styles["profile-image-div"]}>
                  {this.state.image ? (
                    <img
                      className={styles["profile-image"]}
                      src={this.state.image}
                      alt="img"
                    />
                  ) : (
                    <img
                      className={styles["profile-image"]}
                      src={def}
                      alt="img"
                    />
                  )}
                  {/* <label for="upload" className={styles["profile-image-edit"]}>
                    <p>EDIT</p>
                    <img className={styles[""]} src={editwhite} alt="img" />
                  </label> */}
                  <input
                    type="file"
                    name="file"
                    id="upload"
                    className={styles["none"]}
                    onChange={(event) => {
                      this.handleFile(event);
                      // console.log(event);
                    }}
                  />
                </label>
                <div>
                  <div className={styles["profile-top-header-div"]}>
                    <h1>
                      <input
                        className={styles["profile-top-header"]}
                        type="text"
                        placeholder="Input your display name"
                        value={this.state.username}
                        onChange={(event) =>
                          this.handleChange(event, "username")
                        }
                      />
                    </h1>
                    <form onSubmit={this.handleSubmit2}>
                      <button className={styles["edit"]} type="submit">
                        <img className={styles[""]} src={edit} alt="img" />
                      </button>
                    </form>
                  </div>
                  <p className={styles["profile-top-text"]}>
                    as {this.state.role}
                  </p>
                </div>
              </div>
              <div className={styles["section-3-div"]}>
                <div className={styles["section-3-subdiv"]}>
                  <label className={styles["section-3-label"]}>Gender</label>
                  <input
                    className={styles["section-3-text"]}
                    type="text"
                    value={this.state.gender}
                    placeholder="Input your gender"
                    onChange={(event) => this.handleChange(event, "gender")}
                  />
                </div>
                <form
                  className={styles["section-3-form"]}
                  onSubmit={this.handleSubmit2}
                >
                  <button type="submit" className={styles["section-3-edit"]}>
                    <p>EDIT</p>
                    <img className={styles[""]} src={editb} alt="img" />
                  </button>
                </form>
              </div>
              <div className={styles["section-3-div"]}>
                <div>
                  <label className={styles["section-3-label"]}>
                    Your Email
                  </label>
                  <p className={styles["section-3-text"]}>{this.state.email}</p>
                </div>
                <div className={styles["section-3-edit"]}>
                  <p>EDIT</p>
                  <img className={styles[""]} src={editb} alt="img" />
                </div>
              </div>
              <div className={styles["section-3-div"]}>
                <div className={styles["section-3-subdiv"]}>
                  <label className={styles["section-3-label"]}>
                    Store Description
                  </label>
                  <input
                    className={styles["section-3-text"]}
                    type="text"
                    value={this.state.desc}
                    placeholder="Input your store description"
                    onChange={(event) => this.handleChange(event, "desc")}
                  />
                </div>
                <form
                  className={styles["section-3-form"]}
                  onSubmit={this.handleSubmit2}
                >
                  <button type="submit" className={styles["section-3-edit"]}>
                    <p>EDIT</p>
                    <img className={styles[""]} src={editb} alt="img" />
                  </button>
                </form>
              </div>
              <div className={styles["btn-div"]}>
                <form onSubmit={this.handleSubmit}>
                  <button type="submit" className={styles["logout"]}>
                    <img className={styles[""]} src={logout} alt="img" />
                    <p>Logout</p>
                  </button>
                </form>
                <button className={styles["logout"]}>Edit Password</button>
              </div>
            </section>
            <Footer />
          </main>
        </main>
      </Fragment>
    );
  }
}

const Profile = withNavigate(Profiles);

export default Profile;
