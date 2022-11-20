import { ActionType } from "redux-promise-middleware";
import { login, /* logout, reset */ } from "../../utils/fetcher";
import { ACTION_STRING } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const loginPending = () => ({
  type: ACTION_STRING.authLogin.concat("_", Pending),
});
const loginRejected = (error) => ({
  type: ACTION_STRING.authLogin.concat("_", Rejected),
  payload: { error },
});
const loginFulfilled = (data) => ({
  type: ACTION_STRING.authLogin.concat("_", Fulfilled),
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

const loginThunk = (body, navigate) => {
  return async (dispacth) => {
    try {
      dispacth(loginPending());
      const result = await login(body);
      dispacth(loginFulfilled(result.data));
      console.log(result.data);
      localStorage.setItem("token", JSON.stringify(result.data.data.token));
      if (typeof navigate === "function") navigate();
    } catch (error) {
      dispacth(loginRejected(error));
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