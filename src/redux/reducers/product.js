import { ActionType } from "redux-promise-middleware";
import { actionStrings } from "../action/actionStrings";

const initialState = {
  products: [],
  sellerProducts: [],
  productsDetails: {
    brand: "",
    category: "",
    color: "",
    description_product: "",
    id: null,
    images: [],
    price: null,
    product_name: "",
    size: "",
    sold: null,
    stock: null,
  },
  productRelated: [],
  meta: [],
  isError: false,
  isLoading: false,
  isFulfilled: false,
};

const productReducer = (prevState = initialState, { type, payload }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { getProducts, getDetailProduct, getRelatedProduct, getSellerProduct } = actionStrings;
  console.log(payload);
  switch (type) {
    case getProducts.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };

    case getRelatedProduct.concat("_", Pending):
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
    
    case getSellerProduct.concat("_", Pending):
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
    
    case getRelatedProduct.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    
    case getSellerProduct.concat("_", Rejected):
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
    
      case getRelatedProduct.concat("_", Fulfilled):
        return {
          ...prevState,
          isLoading: false,
          isError: false,
          isFulfilled: true,
          productRelated: payload.data.data,
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

      case getSellerProduct.concat("_", Fulfilled):
        return {
          ...prevState,
          isLoading: false,
          isError: false,
          isFulfilled: true,
          sellerProducts: payload.data.data,
        };
      
    default:
      return prevState;
  }
};

export default productReducer;
