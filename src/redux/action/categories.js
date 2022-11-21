import { ActionType } from "redux-promise-middleware";
import { getCategories } from "../../utils/fetcher";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const getCategoriesPending = () => ({
  type: actionStrings.getCategories.concat("_", Pending),
});

const getCategoriesRejected = (error) => ({
  type: actionStrings.getCategories.concat("_", Rejected),
  payload: { error },
});

const getCategoriesFulfilled = (data) => ({
  type: actionStrings.getCategories.concat("_", Fulfilled),
  payload: { data },
});

const getCategoriesThunk = () => {
  return async (dispacth) => {
    try {
      dispacth(getCategoriesPending());
      const result = await getCategories();
      dispacth(getCategoriesFulfilled(result.data));
    } catch (error) {
      dispacth(getCategoriesRejected(error));
    }
  };
};

const categoriesActions = {
  getCategoriesThunk,
};

export default categoriesActions;
