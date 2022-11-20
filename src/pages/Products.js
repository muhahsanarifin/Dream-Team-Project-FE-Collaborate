import React from "react";
import Product from "../components/CardProduct";
import Header from "../components/Header";
import Footer from "../components/Footer";
import chair from "../assets/chair.png";
import styles from "../styles/Products.module.css";

const Products = () => {
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
                  <p>Accessories</p>
                  <p>5</p>
                </li>
                <li>
                  <p>Brands</p>
                  <p>15</p>
                </li>
                <li>
                  <p>Clothing</p>
                  <p>3</p>
                </li>
                <li>
                  <p>Fashion</p>
                  <p>8</p>
                </li>
                <li>
                  <p>Furniture</p>
                  <p>9</p>
                </li>
                <li>
                  <p>Men</p>
                  <p>6</p>
                </li>
                <li>
                  <p>Women</p>
                  <p>8</p>
                </li>
                <li>
                  <p>Shoes</p>
                  <p>10</p>
                </li>
                <li>
                  <p>Wallets</p>
                  <p>11</p>
                </li>
              </ul>
            </span>
            <span className={styles["price"]}>
              <h3>Price</h3>
              <p>Price $39 - $159</p>
              <span></span>
              <button>Filter</button>
            </span>
            <span className={styles["brands"]}>
              <h3>Brands</h3>
              <ul className={styles["brand__list"]}>
                <li>
                  <input type="checkbox" />
                  <label>IKEA</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>Mr Royal</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>Sweet House</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>North Oxford</label>
                </li>
                <li>
                  <input type="checkbox" />
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
              <h3>Brands</h3>
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
                <p>Showing 1-6 of 39 Results</p>
              </span>
              {/* <span className={styles["sorting"]}>
                <label>sort by</label>
                <select>
                  <optgroup label="Price">
                    <option value="">Low</option>
                    <option value="">Expensive</option>
                  </optgroup>
                  <optgroup label="Post">
                    <option value="">Latest</option>
                    <option value="">Oldest</option>
                  </optgroup>
                </select>
              </span> */}
            </span>
            <span className={styles["product-lists"]}>
              {/* <span className={styles["product"]}>
                <img src={chair} alt="" className={styles["product__img"]} />
                <p className={styles["title"]}>Coaster 506222-CO Loveseat</p>
                <p className={styles["price"]}>$765.99</p>
              </span>*/}
              <Product
                img={chair}
                title={`Coaster 506222-CO Loveseat`}
                price={`$765.99`}
              />
              <Product
                img={chair}
                title={`Coaster 506222-CO Loveseat`}
                price={`$765.99`}
              />
              <Product
                img={chair}
                title={`Coaster 506222-CO Loveseat`}
                price={`$765.99`}
              />
              <Product
                img={chair}
                title={`Coaster 506222-CO Loveseat`}
                price={`$765.99`}
              />
              <Product
                img={chair}
                title={`Coaster 506222-CO Loveseat`}
                price={`$765.99`}
              />
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
