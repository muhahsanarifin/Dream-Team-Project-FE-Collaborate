// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./Modal.module.css";
// import { createTransaction } from "../../utils/fetcher";
// import { useDispatch, useSelector } from "react-redux";
// import cart from "../../redux/action/cart";

// const Confirm = (props) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const token = useSelector((state) => state.auth.userInfo.token);
//   const handlePayment = async () => {
//     try {
//       const data = {
//         product_item: props.checkout.data,
//         ...props.checkout.checkout,
//         ...props.body,
//       };
//       const result = await createTransaction(data, token);
//       const dataPayment = result.data.data.midtrans.va_numbers[0];
//       props.setBank(`${dataPayment.bank}`);
//       props.setVa(`Va Number : ${dataPayment.va_number}`);
//       const defaultCart = [];
//       dispatch(cart.addCartThunk(defaultCart));
//       props.setOpen(true);
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <>
//       {props.open ? (
//         <div className={styles.modal}>
//           <div className={styles["modal-content"]}>
//             <div className={styles["modal-header"]}>
//               <p className={styles["modal-title"]}>{props.title}</p>
//             </div>
//             <div className={styles["modal-body"]}>{props.body}</div>
//             <div className={styles["modal-footer"]}>
//               <button
//                 className={styles.button}
//                 onClick={() => props.setOpen(!props)}
//               >
//                 no
//               </button>
//               <button className={styles.button} onClick={handlePayment}>
//                 yes
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// };

// export default Confirm;
