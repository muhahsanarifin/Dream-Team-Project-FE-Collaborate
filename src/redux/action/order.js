import { ActionType } from "redux-promise-middleware";
import { getOrderCustomer, getOrderSeller } from "../../utils/fetcher";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const getOrderPending = () => ({
  type: actionStrings.getOrderSeller.concat("_", Pending),
});

const getOrderRejected = (error) => ({
  type: actionStrings.getOrderSeller.concat("-", Rejected),
  payload: { error },
});

const getOrderFulfilled = (data) => ({
  type: actionStrings.getOrderSeller.concat("_", Fulfilled),
  payload: { data },
});

const getOrderSellerThunk = (config) => {
  return async (dispatch) => {
    try {
      dispatch(getOrderPending());
      console.log(config);
      const result = await getOrderSeller(config);
      dispatch(getOrderFulfilled(result.data));
    } catch (error) {
      dispatch(getOrderRejected(error));
    }
  };
};

const getOrderCustomerThunk = (config) => {
  return async (dispatch) => {
    try {
      dispatch(getOrderPending());
      console.log(config);
      const result = await getOrderCustomer(config);
      dispatch(getOrderFulfilled(result.data));
    } catch (error) {
      dispatch(getOrderRejected(error));
    }
  };
};

const orderAction = {
  getOrderSellerThunk,
  getOrderCustomerThunk,
};

export default orderAction;
