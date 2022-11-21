import {actionStrings} from "./actionStrings";

const addCartAction = (data) => ({
    type: actionStrings.addCart,
    payload: { data },
  });

  const dataCheckoutAction = (data) => ({
    type: actionStrings.dataCheckout,
    payload: { data },
  });

  const dataCheckoutThunk = (payload) => {
    return async (dispacth) => {
        dispacth(dataCheckoutAction(payload));
    };
  };



  const addCartThunk = (payload) => {
    return async (dispacth) => {
        dispacth(addCartAction(payload));
    };
  };
  const cart = {
    addCartThunk,
    dataCheckoutThunk
  };
  
export default cart;