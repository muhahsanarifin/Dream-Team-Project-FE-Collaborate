import { ActionType } from "redux-promise-middleware";
import { getProfile, editProfile } from "../../utils/fetcher";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const getProfilePending = () => ({
  type: actionStrings.getProfile.concat("_", Pending),
});

const getProfileRejected = (error) => ({
  type: actionStrings.getProfile.concat("-", Rejected),
  payload: { error },
});

const getProfileFulfilled = (data) => ({
  type: actionStrings.getProfile.concat("_", Fulfilled),
  payload: { data },
});

const editProfilePending = () => ({
  type: actionStrings.editProfile.concat("_", Pending),
});

const editProfileRejected = (error) => ({
  type: actionStrings.editProfile.concat("-", Rejected),
  payload: { error },
});

const editProfileFulfilled = (data) => ({
  type: actionStrings.editProfile.concat("_", Fulfilled),
  payload: { data },
});

const getProfileThunk = (token) => {
  return async (dispatch) => {
    try {
      dispatch(getProfilePending());
      const result = await getProfile(token);
      dispatch(getProfileFulfilled(result.data));
    } catch (error) {
      dispatch(getProfileRejected(error));
    }
  };
};

const editProfileThunk = (body, token) => {
  return async (dispatch) => {
    try {
      dispatch(editProfilePending());
      const result = await editProfile(body, token);
      dispatch(editProfileFulfilled(result.data));
    } catch (error) {
      dispatch(editProfileRejected(error));
    }
  };
};

const profileAction = {
  getProfileThunk,
  editProfileThunk,
};

export default profileAction;
