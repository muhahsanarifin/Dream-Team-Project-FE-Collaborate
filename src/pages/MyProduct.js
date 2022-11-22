import React, { useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/MyProduct.module.css";
import Loading from "../components/Loading";

// import product from "../assets/product3.png";
import chev from "../assets/chevron.png";
import check from "../assets/check.png";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../redux/action/product";

const MyProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sellerProducts = useSelector((state) => state.products.sellerProducts);
  const isLoading = useSelector((state) => state.products.isLoading);
  const isRejected = useSelector((state) => state.products.isError);
  const [query, setQuery] = useState({});
  const token = localStorage.getItem("token");
  // const useQuery = () => {
  //   const { search } = useLocation();
  //   return useMemo(() => new URLSearchParams(search), [search]);
  // };
  // const getQuery = useQuery();

  const dispatch = useDispatch();
  useEffect(() => {
    const urlSearchParams = createSearchParams({ ...query });
    setSearchParams(urlSearchParams);
    dispatch(productActions.getSellerProductThunk(token, query));
  }, [query, searchParams]);

  const navigate = useNavigate();
  return (
    <>
      <main className={styles["main-2"]}>
        <main className={styles["main"]}>
          <Header />
          <section className={styles["section-1"]}>
            <h1 className={styles["section-1-header"]}>My Product</h1>
            <p className={styles["section-1-text"]}>
              See your notifications for the latest updates
            </p>
          </section>
          <section className={styles["section-2"]}>
            <div className={styles["profile-nav"]}>
              <p
                className={styles["nav-div-2"]}
                onClick={() => {
                  navigate("/profile/seller");
                }}
              >
                Profile
              </p>
              <div
                onClick={() => {
                  navigate("/profile/seller/product");
                }}
              >
                <div className={styles["nav-div-1"]}>
                  <p>My Product</p>
                  <img className={styles["chev"]} src={chev} alt="img" />
                </div>
                <div className={styles["nav-line"]}></div>
              </div>
              <p
                className={styles["nav-div-2"]}
                onClick={() => {
                  navigate("/profile/seller/product/selling");
                }}
              >
                Selling Product
              </p>
              <p
                className={styles["nav-div-2"]}
                onClick={() => {
                  navigate("/profile/seller/order");
                }}
              >
                My Order
              </p>
            </div>
            <table className={styles["table"]}>
              <tr className={styles["tr-top"]}>
                <th className={styles["table-text-1"]}>Product</th>
                <th></th>
                <th className={styles["table-text-1"]}>Stock Status</th>
                <th className={styles["table-text-1"]}>Price</th>
              </tr>
              {isLoading ? (
                <Loading />
              ) : (
                sellerProducts?.map((item, index) => (
                  <tbody>
                    <th className={styles["product-th"]}>
                      <p className={styles["table-img"]}>
                        <img
                          className={styles["product-img"]}
                          src={item.image}
                          key={index}
                          alt="img"
                        />
                      </p>
                    </th>
                    <th className={styles["table-text-2"]}>
                      {item.product_name}
                    </th>
                    <th>
                      <p className={styles["table-text-3"]}>
                        <img
                          className={styles["check"]}
                          src={check}
                          alt="img"
                          key={index}
                        />
                        {item.stock} Stock
                      </p>
                    </th>
                    <th className={styles["table-text-4"]}>Rp {item.price}</th>
                    <th>
                      <p className={styles["delete-div"]}>
                        <button className={styles["delete-btn"]} onClick={() => {}} >Delete</button>
                      </p>
                    </th>
                  </tbody>
                ))
              )}
            </table>
          </section>
          <Footer />
        </main>
      </main>
    </>
  );
};

export default MyProducts;
