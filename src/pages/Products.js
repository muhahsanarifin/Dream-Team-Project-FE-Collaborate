import React, { useEffect, useMemo, useState } from "react";
import Product from "../components/CardProduct";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingAnimation from "../components/Loading";
import CardCategory from "../components/CardCategory";
import styles from "../styles/Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../redux/action/product";
import categoriesActions from "../redux/action/categories";
import cardComingSoon from "../components/CardComingSoon";
import {
  createSearchParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import CardComingSoon from "../components/CardComingSoon";

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const Products = () => {
  const [show, setShow] = useState(false);
  const dispacth = useDispatch();
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);
  const isRejected = useSelector((state) => state.products.isError);
  const categories = useSelector((state) => state.categories.categories);
  const getQuery = useQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    search: getQuery.get("search") || "",
    sort: getQuery.get("sort") || "",
    brandId: getQuery.get("brandId") || "",
    colorId: getQuery.get("colorId") || "",
    categoryId: getQuery.get("categoryId") || "",
    minPrice: getQuery.get("minPrice") || "",
    maxPrice: getQuery.get("maxPrice") || "",
    page: getQuery.get("page") || 1,
    limit: getQuery.get("limit") || 9,
  });
  const totalDataFake = useSelector((state) => state.products.products ? state.products.products.length :  state.products.meta?.totalData);
  const totalData =  useSelector((state) => totalDataFake ? state.products.meta?.totalData : 1) 
  const endItem =
    Number(query.page) === 1 && totalData > Number(query.limit)
      ? query.limit
      : Number(query.page) === 1 && totalData < Number(query.limit)
      ? totalData
      : Number(query.page) !== 1 &&
        totalData < Number(query.limit) * Number(query.page)
      ? totalData
      : Number(query.limit) * Number(query.page);
  const inItem =
    Number(query.page) === 1
      ? 1
      : Number(query.limit) * (Number(query.page) - 1) + 1;
  const dropdownHandler = () => {
    setShow(!show);
  };
  useEffect(() => {
    const urlSearchParams = createSearchParams({ ...query });
    setSearchParams(urlSearchParams);
    console.log(query);
    dispacth(productActions.getProductThunk(query));
  }, [dispacth, query, searchParams]);

  useEffect(() => {
    dispacth(categoriesActions.getCategoriesThunk());
  }, [dispacth]);



  return (
    <>
      <main className={styles["main"]}>
        <Header />
        <section className={styles["carousel"]}>
          {/* <p>Carousel Soon...</p> */}
          <CardComingSoon/>
        </section>
        <section className={styles["breadcrumb"]}>
          <p>Shop</p>
          <span>{`>`}</span>
          <p>Shop Right Sidebar</p>
        </section>
        <section className={styles["main__prodcuts"]}>
          <aside className={styles["left-side-section"]}>
            <span className={styles["categories"]}>
              <h3>Categories</h3>
              <div>
              <div className={styles["content"]}>
                  {categories?.map((e) => (
                    <CardCategory
                      name={e.category}
                      unit={e.total_product}
                      id={e.id}
                      key={e.id}
                      setQuery={setQuery}
                      querys={query}
                    />
                  ))}
                </div>
                </div>
              <ul className={styles["categories__list"]}>
              </ul>
            </span>
            <div className={styles["price"]}>
              <h3>Price</h3>
              <p>Price $39 - $159</p>
              <span></span>
              <button>Filter</button>
            </div>
            <span className={styles["brands"]}>
              <h3>Brands</h3>
              <ul className={styles["brand__list"]}>
                <li>
                  <input
                    type="checkbox"
                    name="brandId"
                    onClick={() => {
                      setQuery({
                        ...query,
                        brandId: "1",
                        page: "1",
                      });
                    }}
                  />
                  <label>IKEA</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="brandId"
                    onClick={() => {
                      setQuery({
                        ...query,
                        brandId: "2",
                        page: "1",
                      });
                    }}
                  />
                  <label>Mr Royal</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="brandId"
                    onClick={() => {
                      setQuery({
                        ...query,
                        brandId: "3",
                        page: "1",
                      });
                    }}
                  />
                  <label>Sweet House</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="brandId"
                    onClick={() => {
                      setQuery({
                        ...query,
                        brandId: "4",
                        page: "1",
                      });
                    }}
                  />
                  <label>North Oxford</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="brandId"
                    onClick={() => {
                      setQuery({
                        ...query,
                        brandId: "5",
                        page: "1",
                      });
                    }}
                  />
                  <label>Mr.Poppins 1929</label>
                </li>
              </ul>
            </span>
            <span className={styles["colors"]}>
              <h3>Colors</h3>
              <span className={styles["color__list"]}>
                <input
                  type="checkbox"
                  className={styles["color__list-brown"]}
                  onClick={() => {
                    setQuery({
                      ...query,
                      colorId: "1",
                      page: "1",
                    });
                  }}
                />
                <input
                  type="checkbox"
                  className={styles["color__list-blue"]}
                  onClick={() => {
                    setQuery({
                      ...query,
                      colorId: "2",
                      page: "1",
                    });
                  }}
                />
                <input
                  type="checkbox"
                  className={styles["color__list-black"]}
                  onClick={() => {
                    setQuery({
                      ...query,
                      colorId: "3",
                      page: "1",
                    });
                  }}
                />
                <input
                  type="checkbox"
                  className={styles["color__list-purple"]}
                  onClick={() => {
                    setQuery({
                      ...query,
                      colorId: "4",
                      page: "1",
                    });
                  }}
                />
                <input
                  type="checkbox"
                  className={styles["color__list-green"]}
                  onClick={() => {
                    setQuery({
                      ...query,
                      colorId: "5",
                      page: "1",
                    });
                  }}
                />
                <input
                  type="checkbox"
                  className={styles["color__list-yellow"]}
                  onClick={() => {
                    setQuery({
                      ...query,
                      colorId: "6",
                      page: "1",
                    });
                  }}
                />
              </span>
            </span>
            <span className={styles["brands-second"]}>
              <h3>Size</h3>
              <ul className={styles["brand__size-list"]}>
                <li
                  onClick={() => {
                    setQuery({
                      ...query,
                      sizeId: "1",
                      page: "1",
                    });
                  }}
                >
                  S
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      ...query,
                      sizeId: "2",
                      page: "1",
                    });
                  }}
                >
                  M
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      ...query,
                      sizeId: "3",
                      page: "1",
                    });
                  }}
                >
                  L
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      ...query,
                      sizeId: "4",
                      page: "1",
                    });
                  }}
                >
                  XL
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      ...query,
                      sizeId: "5",
                      page: "1",
                    });
                  }}
                >
                  XXL
                </li>
                <li
                  onClick={() => {
                    setQuery({
                      ...query,
                      sizeId: "6",
                      page: "1",
                    });
                  }}
                >
                  Full Size
                </li>
              </ul>
            </span>
          </aside>
          <div className={styles["rigth-side-section"]}>
            <span className={styles["info"]}>
              <span className={styles["info__pages"]}>
                <p>
                  Showing {inItem} - {endItem} of {totalData} Results
                </p>
              </span>
              <div className={styles["sort-dropdown"]}>
                <p onClick={dropdownHandler}>
                  Sort by <span>{`▽`}</span>
                </p>
                {show && (
                  <div className={styles["dropdown-list"]}>
                    <ol>
                      <li
                        onClick={() => {
                          setQuery({
                            ...query,
                            sort: "oldest",
                          });
                        }}
                      >
                        oldest
                      </li>
                      <li
                        onClick={() => {
                          setQuery({
                            ...query,
                            sort: "newest",
                          });
                        }}
                      >
                        newest
                      </li>
                      <li
                        onClick={() => {
                          setQuery({
                            ...query,
                            sort: "priciest",
                          });
                        }}
                      >
                        priciest
                      </li>
                      <li
                        onClick={() => {
                          setQuery({
                            ...query,
                            sort: "cheapest",
                          });
                        }}
                      >
                        cheapest
                      </li>
                    </ol>
                  </div>
                )}
              </div>
              
            </span>
            <span className={styles["product-lists"]}>
              {isLoading ? (
                <LoadingAnimation />
              ) : isRejected ? (
                <div>
                  <p className={`${styles["not-found"]}`}>Product Not Found</p>
                  <p className={`${styles["not-found"]}`}>404</p>
                </div>
              ) : (
                products.map((e, idx) => (
                  <Product
                    title={e.product_name}
                    price={e.price}
                    img={e.image}
                    id={e.id}
                    key={idx}
                  />
                ))
              )}
            </span>
            <span className={styles["paginations"]}>
              <ul>
                <li
                  onClick={() => {
                    setQuery({
                      ...query,
                      page: 1,
                    });
                  }}
                >
                  1
                </li>
                <li
                  className={
                    Number(totalData) > Number(query.limit) * 1
                      ? `${styles["disp-block"]}`
                      : `${styles["disp-none"]}`
                  }
                  onClick={() => {
                    setQuery({
                      ...query,
                      page: 2,
                    });
                  }}
                >
                  2
                </li>
                <li
                  className={
                    Number(totalData) > Number(query.limit) * 2
                      ? `${styles["disp-block"]}`
                      : `${styles["disp-none"]}`
                  }
                  onClick={() => {
                    setQuery({
                      ...query,
                      page: 3,
                    });
                  }}
                >
                  3
                </li>
                <li
                  className={
                    Number(totalData) > Number(query.limit) * 3
                      ? `${styles["disp-block"]}`
                      : `${styles["disp-none"]}`
                  }
                  onClick={() => {
                    setQuery({
                      ...query,
                      page: 4,
                    });
                  }}
                >
                  4
                </li>
                <li
                  className={
                    Number(totalData) > Number(query.limit) * 4
                      ? `${styles["disp-block"]}`
                      : `${styles["disp-none"]}`
                  }
                  onClick={() => {
                    setQuery({
                      ...query,
                      page: 5,
                    });
                  }}
                >
                  5
                </li>
              </ul>
            </span>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Products;
