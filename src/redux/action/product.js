import { ActionType } from "redux-promise-middleware";
import { getProduct, getData, getSellerProduct } from "../../utils/fetcher";
import { actionStrings } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const getProductPending = () => ({
  type: actionStrings.getProducts.concat("_", Pending),
});

const getProductDetailPending = () => ({
  type: actionStrings.getDetailProduct.concat("_", Pending),
});

const getRelatedProductPending = () => ({
  type: actionStrings.getRelatedProduct.concat("_", Pending),
});

const getSellerProductPending = () => ({
  type: actionStrings.getRelatedProduct.concat("_", Pending),
});

const getProductRejected = (error) => ({
  type: actionStrings.getProducts.concat("_", Rejected),
  payload: { error },
});

const getProductDetailRejected = (error) => ({
  type: actionStrings.getDetailProduct.concat("_", Rejected),
  payload: { error },
});

const getRelatedProductRejected = (error) => ({
  type: actionStrings.getRelatedProduct.concat("_", Rejected),
  payload: { error },
});

const getSellerProductRejected = (error) => ({
  type: actionStrings.getRelatedProduct.concat("_", Rejected),
  payload: { error },
});

const getProductFulfilled = (data) => ({
  type: actionStrings.getProducts.concat("_", Fulfilled),
  payload: { data },
});

const getProductDetailFulfilled = (data) => ({
  type: actionStrings.getDetailProduct.concat("_", Fulfilled),
  payload: { data },
});

const getRelatedProductFulfilled = (data) => ({
  type: actionStrings.getRelatedProduct.concat("_", Fulfilled),
  payload: { data },
});

const getSellerProductFulfilled = (data) => ({
  type: actionStrings.getRelatedProduct.concat("_", Fulfilled),
  payload: { data },
});

const getProductThunk = (params) => {
  return async (dispacth) => {
    try {
      dispacth(getProductPending());
      const result = await getProduct(params);
      dispacth(getProductFulfilled(result.data));
    } catch (error) {
      dispacth(getProductRejected(error));
    }
  };
};

const getProductDetailThunk = (id) => {
  return async (dispacth) => {
    try {
      dispacth(getProductDetailPending());
      const result = await getData(`raz/product/${id}`);
      dispacth(getProductDetailFulfilled(result.data));
    } catch (error) {
      dispacth(getProductDetailRejected(error));
    }
  };
};

const getSellerProductThunk = (token, params) => {
  return async (dispacth) => {
    try {
      dispacth(getSellerProductPending());
      const result = await getSellerProduct(token, params);
      dispacth(getSellerProductFulfilled(result.data));
    } catch (error) {
      dispacth(getSellerProductRejected(error));
    }
  };
};


const getRelatedProductThunk = (id) => {
  return async (dispacth) => {
    try {
      dispacth(getRelatedProductPending());
      const result = await getData(`raz/product/related/${id}`);
      dispacth(getRelatedProductFulfilled(result.data));
    } catch (error) {
      dispacth(getRelatedProductRejected(error));
    }
  };
};


const productActions = {
  getProductThunk,
  getProductDetailThunk,
  getRelatedProductThunk,
  getSellerProductThunk,
};

export default productActions;
