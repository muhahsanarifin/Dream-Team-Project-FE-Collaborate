import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Profile.module.css";
import Swal from "sweetalert2";
import Axios from "axios";
import withNavigate from "../helpers/withNavigate";
import jwt from "jwt-decode";
import { connect } from "react-redux";

import def from "../assets/default.png";
import logout from "../assets/logout.png";

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      role: undefined,
      gender: "male",
      email: undefined,
      file: undefined,
      image: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
  }

  componentDidMount() {
    console.log(this.props.auth.userInfo.token);
    document.title = "Profile";
    const token = this.props.auth.userInfo.token;
    console.log(token);
    const info = jwt(token);
    const url = `https://dream-team-project-be.vercel.app/raz/users/profile`;
    const config = {
      headers: {
        "x-access-token": this.props.auth.userInfo.token,
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
    const url = `https://dream-team-project-be.vercel.app/raz/auth/logout`;
    const config = {
      headers: {
        "x-access-token": this.props.auth.userInfo.token,
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
    const url = `https://dream-team-project-be.vercel.app/raz/users/profile/edit`;
    const formdata = new FormData();
    console.log(this.state);
    formdata.append("username", this.state.username);
    formdata.append("gender", this.state.gender);
    formdata.append("store_description", this.state.desc);
    if (this.state.file) {
      formdata.append("image", this.state.file);
    }
    const body = formdata;
    const config = {
      headers: {
        "x-access-token": this.props.auth.userInfo.token,
      },
    };
    console.log(body);
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
        console.log(err.message);
        Swal.fire({
          title: err.message,
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
                  </div>
                  <p className={styles["profile-top-text"]}>
                    as {this.state.role}
                  </p>
                </div>
              </div>
              <div className={styles["section-3-div"]}>
                <div className={styles["section-3-subdiv"]}>
                  <label className={styles["section-3-label"]}>Gender</label>
                  <div className={styles["radio-div"]}>
                    <input
                      className={styles["radio"]}
                      type="radio"
                      name="role"
                      checked={this.state.gender === "male"}
                      onClick={() => {
                        this.setState({ gender: "male" });
                      }}
                    />
                    <p className={styles["section-3-label"]}>Male</p>
                    <input
                      className={styles["radio"]}
                      type="radio"
                      name="role"
                      checked={this.state.gender === "female"}
                      onClick={() => {
                        this.setState({ gender: "female" });
                      }}
                    />
                    <p className={styles["section-3-label"]}>Female</p>
                  </div>
                </div>
              </div>
              <div className={styles["section-3-div"]}>
                <div>
                  <label className={styles["section-3-label"]}>
                    Your Email
                  </label>
                  <p className={styles["section-3-text"]}>{this.state.email}</p>
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
              </div>
              <div className={styles["btn-div"]}>
                <form onSubmit={this.handleSubmit}>
                  <button type="submit" className={styles["logout"]}>
                    <img className={styles[""]} src={logout} alt="img" />
                    <p>Logout</p>
                  </button>
                </form>
                <div className={styles["btn-div-2"]}>
                  <form onSubmit={this.handleSubmit2}>
                    <button type="submit" className={styles["logout"]}>
                      Save Change
                    </button>
                  </form>
                  <button className={styles["logout"]}>Edit Password</button>
                </div>
              </div>
            </section>
            <Footer />
          </main>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.auth,
  };
};

// const Login = withNavigate(Logins);
const Profile = withNavigate(Profiles);

export default connect(mapStateToProps)(Profile);

// export default Profile;
