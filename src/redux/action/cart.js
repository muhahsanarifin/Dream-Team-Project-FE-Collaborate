import {actionStrings} from "./actionStrings";

const addCartAction = (data) => ({
    type: actionStrings.addCart,
    payload: { data },
  });


  const addCartThunk = (payload) => {
    return async (dispacth) => {
        dispacth(addCartAction(payload));
    };
  };
  const cart = {
    addCartThunk,
  };
  
export default cart;