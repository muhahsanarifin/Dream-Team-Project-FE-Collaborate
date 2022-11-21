import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "../action/actionStrings";

const initialState = {
  products: [],
  meta: [],
  productDetails: [],
  isError: false,
  isLoading: false,
  isFulfilled: false,
};

const productReducer = (prevState = initialState, { type, payload }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { getProducts, getDetailProduct } = actionStrings;
  console.log(payload);
  switch (type) {
    case getProducts.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
      case getDetailProduct.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getProducts.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case getDetailProduct.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case getProducts.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        products: payload.data.data,
        meta: payload.data.meta,
      };
      case getDetailProduct.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        productsDetails: payload.data.data,
      };
    default:
      return prevState;
  }
};

export default productReducer;
