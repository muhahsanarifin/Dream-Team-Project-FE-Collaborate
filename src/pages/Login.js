import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Login.module.css";
import Swal from "sweetalert2";
import Axios from "axios";
import withNavigate from "../helpers/withNavigate";

class Logins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      email: "",
      password: "",
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = "Login";
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `${process.env.REACT_APP_DT_BACKEND_HOST}raz/auth/login`;
    const data = { email: this.state.email, password: this.state.password };
    Axios.post(url, data)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        // console.log(res.data);
        Swal.fire({
          title: "Login Success",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            this.props.navigate("/");
          }
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Wrong password or email",
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
              <h1 className={styles["section-1-header"]}>My Account</h1>
              <p className={styles["section-1-text"]}>
                Register and log in with your account to be able to shop at will
              </p>
            </section>
            <section className={styles["section-2"]}>
              <aside className={styles["section-2-aside-left"]}>
                <h1 className={styles["section-2-aside-left-header"]}>
                  Login Account
                </h1>
                <div className={styles["line"]}></div>
                <h1
                  onClick={() => {
                    this.props.navigate("/register");
                  }}
                  className={styles["section-2-aside-left-header-2"]}
                >
                  Register Account
                </h1>
              </aside>
              <aside className={styles["section-2-aside-right"]}>
                <h1 className={styles["section-2-aside-right-header"]}>
                  Login
                </h1>
                <input
                  className={styles["aside-right-input-1"]}
                  type="text"
                  placeholder="User name or email address *"
                  value={this.state.email}
                  onChange={(event) => this.handleChange(event, "email")}
                />
                <input
                  className={styles["aside-right-input-2"]}
                  type="password"
                  placeholder="Password *"
                  value={this.state.password}
                  onChange={(event) => this.handleChange(event, "password")}
                />
                <form onSubmit={this.handleSubmit}>
                  <button className={styles["button"]}>Login</button>
                </form>
                <div className={styles["remember-div"]}>
                  <input type="checkbox" />
                  <p className={styles["remember-text"]}>Remember me</p>
                  <p className={styles["forget"]}>Forget your password?</p>
                </div>
              </aside>
            </section>
            <Footer />
          </main>
        </main>
      </Fragment>
    );
  }
}

const Login = withNavigate(Logins);

export default Login;
