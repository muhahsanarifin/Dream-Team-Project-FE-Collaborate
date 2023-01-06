import { ActionType } from "redux-promise-middleware";
import { login /* logout, reset */ } from "../../utils/fetcher";
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

// const logoutPending = () => ({
//   type: ACTION_STRING.authLogout.concat("_", Pending),
// });
// const logoutRejected = (error) => ({
//   type: ACTION_STRING.authLogout.concat("_", Rejected),
//   payload: { error },
// });
// const logoutFulfilled = (data) => ({
//   type: ACTION_STRING.authLogout.concat("_", Fulfilled),
//   payload: { data },
// });

// const resetPending = () => ({
//   type: ACTION_STRING.authReset.concat("_", Pending),
// });
// const resetRejected = (error) => ({
//   type: ACTION_STRING.authReset.concat("_", Rejected),
//   payload: { error },
// });
// const resetFulfilled = (data) => ({
//   type: ACTION_STRING.authReset.concat("_", Fulfilled),
//   payload: { data },
// });

const loginThunk = (body, navigate, cbSuccess, cbError) => {
  return async (dispatch) => {
    try {
      dispatch(loginPending());
      const result = await login(body);
      // console.log(typeof result.data.data.token);
      // console.log(typeof result.data.data.role);
      const token = result.data.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("role", result.data.data.role);
      dispatch(loginFulfilled(result.data));
      // console.log(result.data);
      // localStorage.setItem("token", JSON.stringify(result.data.data.token));
      if (typeof cbSuccess === "function") cbSuccess();
      if (typeof navigate === "function") navigate();
    } catch (error) {
      dispatch(loginRejected(error));
      if (typeof cbError === "function") cbError(error);
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
  // logoutThunk,
  // resetThunk,
};

export default authActions;
