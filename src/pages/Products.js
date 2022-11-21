import React, { useEffect, useMemo, useState } from "react";
import Product from "../components/CardProduct";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import chair from "../assets/chair.png";
import styles from "../styles/Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../redux/action/product";
import { createSearchParams, useLocation, useSearchParams } from "react-router-dom";

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const Products = () => {
  const [show, setShow] = useState(false);
  const dispacth = useDispatch();
  const products = useSelector((state) => state.products.products);
  const getQuery = useQuery()
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
    limit: getQuery.get("limit") || 30,
  })

  const dropdownHandler = () => {
    setShow(!show);
  };

  useEffect(() => {
    const urlSearchParams = createSearchParams({...query});
    setSearchParams(urlSearchParams)
    console.log(query);
    dispacth(productActions.getProductThunk(query));
  }, [dispacth, query, searchParams]);

  return (
    <>
      <Header />
      <main className={styles["main"]}>
        <section className={styles["carousel"]}>
          <p>Carousel Soon</p>
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
              <ul className={styles["categories__list"]}>
                <li>
                  <p className={styles["categories__list_1"]} onClick={() => {
                    setQuery({
                      ...query,
                      categoryId: "1",
                    });
                  }}>Accessories</p>
                  <p>{}</p>
                </li>
                <li>
                  <p className={styles["categories__list_1"]} onClick={() => {
                    setQuery({
                      ...query,
                      categoryId: "2",
                    });
                  }}>Brands</p>
                  <p>15</p>
                </li>
                <li>
                  <p className={styles["categories__list_1"]} onClick={() => {
                    setQuery({
                      ...query,
                      categoryId: "3",
                    });
                  }}>Clothing</p>
                  <p>3</p>
                </li>
                <li>
                  <p className={styles["categories__list_1"]} onClick={() => {
                    setQuery({
                      ...query,
                      categoryId: "4",
                    });
                  }}>Fashion</p>
                  <p>8</p>
                </li>
                <li>
                  <p className={styles["categories__list_1"]} onClick={() => {
                    setQuery({
                      ...query,
                      categoryId: "5",
                    });
                  }}>Furniture</p>
                  <p>9</p>
                </li>
                <li>
                  <p className={styles["categories__list_1"]} onClick={() => {
                    setQuery({
                      ...query,
                      categoryId: "6",
                    });
                  }}>Men</p>
                  <p>6</p>
                </li>
                <li>
                  <p className={styles["categories__list_1"]} onClick={() => {
                    setQuery({
                      ...query,
                      categoryId: "7",
                    });
                  }}>Women</p>
                  <p>8</p>
                </li>
                <li>
                  <p className={styles["categories__list_1"]} onClick={() => {
                    setQuery({
                      ...query,
                      categoryId: "8",
                    });
                  }}>Shoes</p>
                  <p>10</p>
                </li>
                <li>
                  <p className={styles["categories__list_1"]} onClick={() => {
                    setQuery({
                      ...query,
                      categoryId: "9",
                    });
                  }}>Wallets</p>
                  <p>11</p>
                </li>
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
                  <input type="radio" name="brandId" onClick={() => {
                    setQuery({
                      ...query,
                      brandId: "1",
                    });
                  }}/>
                  <label>IKEA</label>
                </li>
                <li>
                  <input type="radio" name="brandId" onClick={() => {
                    setQuery({
                      ...query,
                      brandId: "2",
                    });
                  }}/>
                  <label>Mr Royal</label>
                </li>
                <li>
                  <input type="radio" name="brandId" onClick={() => {
                    setQuery({
                      ...query,
                      brandId: "3",
                    });
                  }}/>
                  <label>Sweet House</label>
                </li>
                <li>
                  <input type="radio" name="brandId"  onClick={() => {
                    setQuery({
                      ...query,
                      brandId: "4",
                    });
                  }}/>
                  <label>North Oxford</label>
                </li>
                <li>
                  <input type="radio" name="brandId" onClick={() => {
                    setQuery({
                      ...query,
                      brandId: "5",
                    });
                  }}/>
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
                />
                <input type="checkbox" className={styles["color__list-blue"]} />
                <input
                  type="checkbox"
                  className={styles["color__list-black"]}
                />
                <input
                  type="checkbox"
                  className={styles["color__list-purple"]}
                />
                <input
                  type="checkbox"
                  className={styles["color__list-green"]}
                />
                <input
                  type="checkbox"
                  className={styles["color__list-yellow"]}
                />
              </span>
            </span>
            <span className={styles["brands-second"]}>
              <h3>Size</h3>
              <ul className={styles["brand__size-list"]}>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
                <li>Pull Size</li>
              </ul>
            </span>
          </aside>
          <div className={styles["rigth-side-section"]}>
            <span className={styles["info"]}>
              <span className={styles["info__pages"]}>
                <p>Showing 1-6 of {products.length} Results</p>
              </span>
              <div className={styles["sort-dropdown"]}>
                  <p onClick={dropdownHandler}>
                    Sort by <span>&#8704;</span>
                  </p>
                </div>
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
              {/* <span>
                <label>Sort by
                <div>
                  <optgroup label="Price">
                    <option onClick={() => {
                      setQuery({
                        ...query,
                        sort: "cheapest",
                      })
                    }}>Cheapest</option>
                    <option value="" onClick={() => {
                      setQuery({
                        ...query,
                        sort: "priciest",
                      })
                    }}>Priciest</option>
                    {console.log()}
                  </optgroup>
                  <optgroup label="Post">
                    <option value="" onClick={() => {
                      setQuery({
                        ...query,
                        sort: "newest",
                      })
                    }}>Latest</option>
                    <option value="" onClick={() => {
                      setQuery({
                        ...query,
                        sort: "oldest",
                      })
                    }}>Oldest</option>
                  </optgroup>
                </div>
                </label>
                  </span> */}
            </span>
            <span className={styles["product-lists"]}>
              {/* <span className={styles["product"]}>
                <img src={chair} alt="" className={styles["product__img"]} />
                <p className={styles["title"]}>Coaster 506222-CO Loveseat</p>
                <p className={styles["price"]}>$765.99</p>
              </span>*/}
              {products.map((e, idx) => (
                <Product
                  title={e.product_name}
                  price={e.price}
                  img={e.image}
                  id={e.id}
                  key={idx}
                />
              ))}
            </span>
            <span className={styles["paginations"]}>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
