import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "../action/actionStrings";

const initialState = {
  orders: [],
  isError: false,
  isLoading: false,
  isFulfilled: false,
};

const orderReducer = (prevState = initialState, { type, payload }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { getOrderCustomer, getOrderSeller } = actionStrings;
  console.log(payload);
  switch (type) {
    case getOrderSeller.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getOrderCustomer.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };

    case getOrderSeller.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case getOrderCustomer.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };

    case getOrderSeller.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        orders: payload.data.data,
      };
    case getOrderCustomer.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        orders: payload.data.data,
      };

    default:
      return prevState;
  }
};

export default orderReducer;
