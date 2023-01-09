import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authActions from "../redux/action/auth";
import styles from "./ModalLogout.module.css";
import Loading from "../LoadingBtn";

const ModalLogout = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.isLoading);

  const logoutSuccess = () => {
    toast.success("Logout success!");
    navigate("/auth/login");
  };

  const logoutHandler = () => {
    dispatch(authActions.logoutThunk(logoutSuccess));
  };

  return (
    <>
      {props.open ? (
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <div className={styles["modal-header"]}>
              <p className={styles["modal-title"]}>Logout</p>
            </div>
            <div className={styles["modal-body"]}>Are you sure want to logout?</div>
            <div className={styles["modal-footer"]}>
              {loading ? (
                <div className={styles.button}>
                  <Loading />
                </div>
              ) : (
                <button className={styles.button} onClick={logoutHandler}>
                  yes
                </button>
              )}

              <button
                className={styles.button}
                onClick={() => props.setOpen(!props)}
              >
                no
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalLogout;
