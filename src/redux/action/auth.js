import { ActionType } from "redux-promise-middleware";
import { login, logout, register } from "../../utils/fetcher";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const loginPending = () => ({
  type: actionStrings.authLogin.concat("_", Pending),
});
const loginRejected = (error) => ({
  type: actionStrings.authLogin.concat("_", Rejected),
  payload: { error },
});
const loginFulfilled = (data) => ({
  type: actionStrings.authLogin.concat("_", Fulfilled),
  payload: { data },
});

const logoutPending = () => ({
  type: actionStrings.authLogout.concat("_", Pending),
});
const logoutRejected = (error) => ({
  type: actionStrings.authLogout.concat("_", Rejected),
  payload: { error },
});
const logoutFulfilled = (data) => ({
  type: actionStrings.authLogout.concat("_", Fulfilled),
  payload: { data },
});

const registerPending = () => ({
  type: actionStrings.register.concat("_", Pending),
});

const registerRejected = (error) => ({
  type: actionStrings.register.concat("_", Rejected),
  payload: { error },
});

const registerFulfilled = (data) => ({
  type: actionStrings.register.concat("_", Fulfilled),
  payload: { data },
});

// const resetPending = () => ({
//   type: actionStrings.authReset.concat("_", Pending),
// });
// const resetRejected = (error) => ({
//   type: actionStrings.authReset.concat("_", Rejected),
//   payload: { error },
// });
// const resetFulfilled = (data) => ({
//   type: actionStrings.authReset.concat("_", Fulfilled),
//   payload: { data },
// });

// const loginThunk = (body, navigate) => {
//   return async (dispacth) => {
//     try {
//       dispacth(loginPending());
//       const result = await login(body);
//       dispacth(loginFulfilled(result.data));
//       console.log(result.data);
//       localStorage.setItem("token", JSON.stringify(result.data.data.token));
//       if (typeof navigate === "function") navigate();
//     } catch (error) {
//       dispacth(loginRejected(error));
//     }
//   };
// };

const registerThunk = (body, cbSuccess, cbDenied) => {
  return async (dispatch) => {
    try {
      dispatch(registerPending());
      const result = await register(body);
      dispatch(registerFulfilled(result.data));
      if (typeof cbSuccess === "function") cbSuccess();
    } catch (error) {
      dispatch(registerRejected(error));
      if (typeof cbDenied === "function") cbDenied();
    }
  };
};

const loginThunk = (body, cbSuccess, cbDenied) => {
  return async (dispatch) => {
    try {
      dispatch(loginPending());
      const result = await login(body);
      dispatch(loginFulfilled(result.data));
      localStorage.setItem("token", JSON.stringify(result.data.data.token));
      if (typeof cbSuccess === "function") cbSuccess();
    } catch (error) {
      dispatch(loginRejected(error));
      if (typeof cbDenied === "function") cbDenied();
    }
  };
};

// const logoutThunk = (token, navigate) => {
//   return async (dispacth) => {
//     try {
//       dispacth(logoutPending());
//       const result = await logout(token);
//       dispacth(logoutFulfilled(result.data));
//       console.log(result.data);
//       if (typeof navigate === "function") navigate();
//     } catch (error) {
//       dispacth(logoutRejected(error));
//     }
//   };
// };

const logoutThunk = (cbSuccess) => {
  return async (dispatch) => {
    try {
      dispatch(logoutPending());
      const result = await logout();
      dispatch(logoutFulfilled(result.data));
      localStorage.clear();
      if (typeof cbSuccess === "function") cbSuccess();
    } catch (error) {
      dispatch(logoutRejected(error));
    }
  };
};

// const resetThunk = (body, navigate) => {
//   return async (dispacth) => {
//     try {
//       dispacth(resetPending());
//       const result = await reset(body);
//       dispacth(resetFulfilled(result.data));
//       console.log(result.data.data);
//       if (typeof navigate === "function") navigate();
//     } catch (error) {
//       dispacth(resetRejected(error));
//     }
//   };
// };

const authActions = {
  loginThunk,
  logoutThunk,
  registerThunk,
  // resetThunk,
};

export default authActions;
