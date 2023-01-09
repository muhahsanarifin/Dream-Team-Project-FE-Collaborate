import React, { Component, Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Register.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authActions from "../redux/action/auth";
import Loading from "../components/LoadingBtn";
// import Swal from "sweetalert2";
// import Axios from "axios";
// import withNavigate from "../helpers/withNavigate";

import eye from "../assets/eye.png";
import eyeSlash from "../assets/eyeSlash.png";

// class Registers extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hidden: true,
//       email: "",
//       password: "",
//       role: "customer",
//     };
//     this.toggleShow = this.toggleShow.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {
//     document.title = "Login";
//   }

//   toggleShow() {
//     this.setState({ hidden: !this.state.hidden });
//   }

//   handleChange(event, field) {
//     this.setState({ [field]: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const url = `https://dream-team-project-be.vercel.app/raz/auth/register`;
//     const data = {
//       email: this.state.email,
//       password: this.state.password,
//       role: this.state.role,
//     };
//     Axios.post(url, data)
//       .then((res) => {
//         Swal.fire({
//           title: "Register Success",
//           timer: 2000,
//           showConfirmButton: false,
//           timerProgressBar: true,
//         }).then((result) => {
//           if (result.dismiss === Swal.DismissReason.timer) {
//             this.props.navigate("/");
//           }
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         Swal.fire({
//           title: "Password or email is not valid",
//           showConfirmButton: false,
//           timer: 1000,
//         });
//       });
//   }

//   render() {
//     console.log(this.state.role);
//     return (
//       <Fragment>
//         <main className={styles["main-2"]}>
//           <main className={styles["main"]}>
//             <Header />
//             <section className={styles["section-1"]}>
//               <h1 className={styles["section-1-header"]}>My Account</h1>
//               <p className={styles["section-1-text"]}>
//                 Register and log in with your account to be able to shop at will
//               </p>
//             </section>
//             <section className={styles["section-2"]}>
//               <aside className={styles["section-2-aside-left"]}>
//                 <h1
//                   onClick={() => {
//                     this.props.navigate("/login");
//                   }}
//                   className={styles["section-2-aside-left-header-2"]}
//                 >
//                   Login Account
//                 </h1>
//                 <h1
//                   onClick={() => {
//                     this.props.navigate("/register");
//                   }}
//                   className={styles["section-2-aside-left-header"]}
//                 >
//                   Register Account
//                 </h1>
//                 <div className={styles["line"]}></div>
//               </aside>
//               <aside className={styles["section-2-aside-right"]}>
//                 <h1 className={styles["section-2-aside-right-header"]}>
//                   Create Account
//                 </h1>
//                 <input
//                   className={styles["aside-right-input-1"]}
//                   type="text"
//                   placeholder="Email address*"
//                   value={this.state.email}
//                   onChange={(event) => this.handleChange(event, "email")}
//                 />
//                 <input
//                   className={styles["aside-right-input-2"]}
//                   type="password"
//                   placeholder="Password *"
//                   value={this.state.password}
//                   onChange={(event) => this.handleChange(event, "password")}
//                 />
//                 <div className={styles["remember-div"]}>
//                   <input
//                     className={styles["radio"]}
//                     type="radio"
//                     name="role"
//                     onClick={() => {
//                       this.setState({ role: "customer" });
//                     }}
//                   />
//                   <p className={styles["remember-text"]}>I'm customer</p>
//                   <input
//                     className={styles["radio"]}
//                     type="radio"
//                     name="role"
//                     onClick={() => {
//                       this.setState({ role: "seller" });
//                     }}
//                   />
//                   <p className={styles["remember-text"]}>I'm seller</p>
//                 </div>
//                 <form onSubmit={this.handleSubmit}>
//                   <button className={styles["button"]}>Register</button>
//                 </form>
//               </aside>
//             </section>
//             <Footer />
//           </main>
//         </main>
//       </Fragment>
//     );
//   }
// }

// const Register = withNavigate(Registers);

// export default Register;

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const errorMsg = useSelector((state) => state.auth.error);
  const [body, setBody] = useState({});
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [emptyForm, setEmptyForm] = useState(true);

  const checkEmptyForm = (body) => {
    if (isLoading || !body.email || !body.password || !body.role)
      return setEmptyForm(true);
    body.email && body.password && body.role && setEmptyForm(false);
  };

  const changeHandler = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };
  console.log(body);

  const registerSuccess = () => {
    toast.success("Register success", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const registerDenied = () => {
    toast.error(`Register failed! ${errorMsg}`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(body);

    dispatch(authActions.registerThunk(body, registerSuccess, registerDenied));
  };

  useEffect(() => {
    checkEmptyForm(body);
  }, [body]);

  return (
    <>
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
              <h1
                onClick={() => {
                  navigate("/login");
                }}
                className={styles["section-2-aside-left-header-2"]}
              >
                Login Account
              </h1>
              <h1
                onClick={() => {
                  navigate("/register");
                }}
                className={styles["section-2-aside-left-header"]}
              >
                Register Account
              </h1>
              <div className={styles["line"]}></div>
            </aside>
            <aside className={styles["section-2-aside-right"]}>
              <h1 className={styles["section-2-aside-right-header"]}>
                Create Account
              </h1>
              <form action="">
                <input
                  className={styles["aside-right-input-1"]}
                  type="text"
                  placeholder="Email address*"
                  name="email"
                  required
                  onChange={changeHandler}
                />
                <div className={styles["aside-right-input-2"]}>
                  <input
                    className={styles.inputPwd}
                    type={isPwdShown ? "text" : "password"}
                    placeholder="Password *"
                    name="password"
                    required
                    onChange={changeHandler}
                  />
                  <img
                    className={styles["icon"]}
                    src={isPwdShown ? eye : eyeSlash}
                    alt=""
                    onClick={() => setIsPwdShown(!isPwdShown)}
                  />
                </div>
                <div className={styles["remember-div"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="role"
                    value="customer"
                    onChange={changeHandler}
                    // onClick={() => {
                    //   this.setState({ role: "customer" });
                    // }}
                  />
                  <p className={styles["remember-text"]}>I'm customer</p>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="role"
                    value="seller"
                    onChange={changeHandler}
                    // onClick={() => {
                    //   this.setState({ role: "seller" });
                    // }}
                  />
                  <p className={styles["remember-text"]}>I'm seller</p>
                </div>
                {isLoading ? (
                  <div className={styles["button"]}>
                    <Loading />
                  </div>
                ) : (
                  <button
                    className={styles["button"]}
                    type="submit"
                    disabled={emptyForm}
                    onClick={handleSubmit}
                  >
                    Register
                  </button>
                )}
              </form>
              <ToastContainer></ToastContainer>
            </aside>
          </section>
          <Footer />
        </main>
      </main>
    </>
  );
};

export default Register;
