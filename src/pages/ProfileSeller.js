import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/ProfileSeller.module.css";
import Swal from "sweetalert2";
import Axios from "axios";
import edit from "../assets/default.png";
import logout from "../assets/logout.png";
import chev from "../assets/chevrongrey.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import profileAction from "../redux/action/profile";
import productActions from "../redux/action/product";

export default function ProfileSellers() {
  document.title = "Profile";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userInfo.token);
  const profile = useSelector((state) => state.profile.profile[0]);
  const [query, setQuery] = useState({});
  const [body, setBody] = useState({
    username: profile.username,
    role: profile.role,
    gender: profile.gender,
    email: profile.email,
    file: profile.file,
    image: profile.image || edit,
    store_description: profile.store_description,
  });
  console.log(body);
  useEffect(() => {
    dispatch(profileAction.getProfileThunk(token));
    dispatch(productActions.getSellerProductThunk(token, query));
  }, [dispatch, token]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://dream-team-project-be.vercel.app/raz/auth/logout`;
    const config = {
      headers: {
        "x-access-token": token,
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
            navigate("/login");
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
  };

  const handleChange = (event, field) => {
    setBody({
      ...body,
      [field]: event.target.value,
    });
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    // const url = `https://dream-team-project-be.vercel.app/raz/users/profile/edit`;
    const formData = new FormData();
    formData.append("username", body.username);
    formData.append("gender", body.gender);
    formData.append("store_description", body.desc);
    if (body.file) {
      formData.append("image", body.file);
    }
    // const bodies = formData;
    // const config = {
    //   headers: {
    //     "x-access-token": token,
    //   },
    // };

    // for (const value of formData.values()) {
    //   console.log(value);
    // }
    // Axios.patch(url, bodies, config)
    //   .then((res) => {
    //     Swal.fire({
    //       title: "Data changed successfully!",
    //       timer: 2000,
    //       showConfirmButton: false,
    //     }).then((result) => {
    //       if (result.dismiss === Swal.DismissReason.timer) {
    //         window.location.reload();
    //       }
    //     });
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     Swal.fire({
    //       title: "Data not valid!",
    //       showConfirmButton: false,
    //       timer: 1000,
    //     });
    //   });
  };

  const handleFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      setBody({
        ...body,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
    setBody({
      ...body,
      file: event.target.files[0],
    });
  };

  return (
    <>
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
              <div>
                <p
                  className={styles["nav-div-1"]}
                  onClick={() => {
                    navigate("/profile/seller");
                  }}
                >
                  Profile
                </p>
                <div className={styles["nav-line"]}></div>
              </div>
              <div
                onClick={() => {
                  navigate("/profile/seller/product");
                }}
              >
                <div className={styles["nav-div-2"]}>
                  <p>My Product</p>
                  <img className={styles["chev"]} src={chev} alt="img" />
                </div>
              </div>
              <p
                className={styles["nav-div-2"]}
                onClick={() => {
                  navigate("/profile/seller/product/selling");
                }}
              >
                Selling Product
              </p>
              <p
                className={styles["nav-div-2"]}
                onClick={() => {
                  navigate("/profile/seller/order");
                }}
              >
                My Order
              </p>
            </div>
            <section className={styles["section-2"]}>
              <div className={styles["profile-div"]}>
                <label htmlFor="upload" className={styles["profile-image-div"]}>
                  {body.image ? (
                    <img
                      className={styles["profile-image"]}
                      src={body.image}
                      alt="img"
                    />
                  ) : (
                    <img
                      className={styles["profile-image"]}
                      src={edit}
                      alt="img"
                    />
                  )}
                  <input
                    type="file"
                    name="file"
                    id="upload"
                    className={styles["none"]}
                    onChange={(e) => {
                      handleFile(e);
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
                        value={body.username}
                        onChange={(event) => handleChange(event, "username")}
                      />
                    </h1>
                  </div>
                  <p className={styles["profile-top-text"]}>as {body.role}</p>
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
                      checked={body.gender === "male"}
                      onClick={() => {
                        setBody({
                          ...body,
                          gender: "male",
                        });
                      }}
                    />
                    <p className={styles["section-3-label"]}>Male</p>
                    <input
                      className={styles["radio"]}
                      type="radio"
                      name="role"
                      checked={body.gender === "female"}
                      onClick={() => {
                        setBody({
                          ...body,
                          gender: "female",
                        });
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
                  <p className={styles["section-3-text"]}>{body.email}</p>
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
                    value={body.store_description}
                    placeholder="Input your store description"
                    onChange={(event) =>
                      handleChange(event, "store_description")
                    }
                  />
                </div>
              </div>
              <div className={styles["btn-div"]}>
                <form onSubmit={handleSubmit}>
                  <button type="submit" className={styles["logout"]}>
                    <img className={styles[""]} src={logout} alt="img" />
                    <p>Logout</p>
                  </button>
                </form>
                <div className={styles["submit-div"]}>
                  <form onSubmit={handleSubmit2}>
                    <button type="submit" className={styles["logout"]}>
                      Save Change
                    </button>
                  </form>
                  <button className={styles["logout"]}>Edit Password</button>
                </div>
              </div>
            </section>
          </section>
          <Footer />
        </main>
      </main>
    </>
  );
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     auth: state.auth,
//   };
// };

// const ProfileSeller = withNavigate(ProfileSellers);

// export default connect(mapStateToProps)(ProfileSeller);
// export default ProfileSeller;
