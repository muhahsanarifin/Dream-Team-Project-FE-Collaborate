import {actionStrings} from "../action/actionStrings";

const initialState = {
  data: [],
};

const cartReducer = (prevState = initialState, { type, payload }) => {
  // lakukan pengondisian untuk masing masing action
  switch (type) {
      case actionStrings.addCart:
        console.log('reducer.payload',payload);
      return {
        ...prevState,
        data: payload.data,
      };
    case actionStrings.deleteCart:
      return {
        ...prevState,
        data: payload,
      };
    default:
      return prevState;
  }
};

export default cartReducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   // default value
//   data: {
//     cart:[]
//   },
// };

// export const addCart = createAsyncThunk("cart/addCart", (payload) => {
//     console.log('chunkthunk',payload);
//     return payload
//   });

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
// //   reducers: {
// //     addCartAction : (state,action) => {
// //         console.log('slice',action);
// //         state.data.cart= action.payload
// //     }
// //   }
// //   reducers: {
// //     addCart: (prevState,{payload}) => {
//       // return {
//       //   ...prevState,
//       //   number: prevState.number + 1,
//       // };
//     //   prevState.data = payload;
//     // },
//     // deleteCart: (prevState,{payload}) => {
//       // return {
//       //   ...prevState,
//       //   number: prevState.number === 0 ? 0 : prevState.number - 1,
//       // };
// //       prevState.number = payload;
// //     },
// //   },
//   //   extraReducers: {
//   //     [counterReset]: (prevState) => {
//   //       return {
//   //         ...prevState,
//   //         number: initialState.number,
//   //       };
//   //     },
//   //   },
//   extraReducers: (builder) => {
//     builder.addCase(addCart, (state,action) => {
//       state.data = action
//     });
//   },
// });
// export const {addCartAction} = cartSlice.actions
// export default cartSlice.reducer

// // export action
// // export const { counterUp, counterDown } = counterSlice.actions;
// // export const counterActions = {
// //   ...counterSlice.actions,
// //   counterReset,
// // };
// // export reducer
// // export default counterSlice.reducer;