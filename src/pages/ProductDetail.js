import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/ProductDetail.module.css";
import Heart from "../assets/love-white.png";

const ProductDetail = () => {
  return (
    <>
      <Header />
      <main className={styles["main"]}>
        <section>
          <span className={styles["breadcrumb"]}>
            <p>Shop</p>
            <p>{`>`}</p>
            <p>Shop Right Sidebar</p>
            <p>{`>`}</p>
            <p>Product</p>
          </span>
        </section>
        <section className={styles["product-detail"]}>
          <span className={styles["product-detail__images"]}>
            <ul className={styles["product-detail__images-left-side"]}>
              <li>
                <img src={``} alt={``} />
              </li>
              <li>
                <img src={``} alt={``} />
              </li>
              <li>
                <img src={``} alt={``} />
              </li>
              <li>
                <img src={``} alt={``} />
              </li>
              <li>
                <img src={``} alt={``} />
              </li>
            </ul>
            <span className={styles["product-detail__images-right-side"]}>
              <img src={``} alt={``} />
            </span>
          </span>
          <span className={styles["product-detail__descriptions"]}>
            <h3 className={styles["product-detail__descriptions__titles"]}>
              Coaster Home Furnishings Sofa in Oatmeal
            </h3>
            <span className={styles["ratings"]}>{`2 (review)`}</span>
            <span className={styles["price-and-sold-history"]}>
              <p className={styles["price"]}>$765.99</p>
              <p className={styles["sold"]}>19 Sold / 40 In Stock</p>
            </span>
            <p className={styles[["description"]]}>
              Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
              Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices
              exurabitur ut magna dignissim, dignissiNullam vitae venenatis
              elit. Proin dui lacus, viverra at imperdiet non, facilisis eget
              orci. Vivamus ac elit tellus. Vestibulum nulla dui, consequat
              vitae diam eu, pretium finibus libero. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Aliquam vitae neque tellus.
            </p>
          </span>

          <span className={styles["components"]}>
            <ul className={styles["qty"]}>
              <li>-</li>
              <li>01</li>
              <li>+</li>
            </ul>
            <button className={styles["add-to-cart"]}> Add to cart</button>
            <span className={styles["favorites"]}>
              <img src={Heart} alt={``} />
            </span>
            <button className={styles["add-to-whishlist"]}>
              {" "}
              Add to whishlist
            </button>
          </span>
          <span className={styles["details"]}>
            <p>SKU: N/A</p>
            <p>Categories: Furniture, Interior, Chair</p>
            <p>Tag: Furniture, Chair, Scandinavian, Modern</p>
            <p>Product ID: 274</p>
          </span>
          <span className={styles["deliveries"]}>
            <ul>
              <li>
                <img src={``} alt={``} />
                <p>Delivery and return</p>
              </li>
              <li>
                <img src={``} alt={``} />
                <p>Size Guide</p>
              </li>

              <li>
                <img src="" alt={``} />
                <p>Store availability</p>
              </li>
            </ul>
          </span>
          <span className={styles["medias"]}>
            <img src={``} alt={``} />
            <img src={``} alt={``} />
            <img src={``} alt={``} />
          </span>
        </section>
        <section>
          <span className={styles["lists-section"]}>
            <ul className={styles["lists"]}>
              <li>Description</li>
              <li>Review</li>
              <li>Additional Information</li>
              <li>Abaout Brand</li>
              <li>Shipping & Delivery</li>
            </ul>
          </span>
          <span className={styles["images-description"]}>
            <img src={``} alt={``} />
            <span>
              <p>
                Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at
                egestas magna molestie a. Proin ac ex maximus, ultrices justo
                eget, sodales orci. Aliquam egestas libero ac turpis pharetra,
                in vehicula lacus scelerisque. Vestibulum ut sem laoreet,
                feugiat tellus at, hendrerit arcu..
              </p>
              <ul>
                <li>
                  Maecenas eu ante a elit tempus fermentum. Aliquam commodo
                  tincidunt semper
                </li>
                <li>
                  Aliquam est et tempus. Eaecenas libero ante, tincidunt vel
                </li>
              </ul>
              <p>
                Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi.
                Maecenas eu ante a elit tempus fermentum. Aliquam commodo
                tincidunt semper. Phasellus accum
              </p>
            </span>
          </span>
        </section>
        <section className={styles["related-prodcuts"]}>
          <h3 className={styles["related-prodcuts-title"]}>Related Prodcuts</h3>
          <ul className={styles["related-prodcuts__list"]}>
            <li className={styles["prodcut"]}>
              <img
                src={``}
                alt={``}
                className={styles["related-prodcut__image"]}
              />
              <span className={styles["product_description"]}>
                <h3>Coaster 506222-CO Loveseat</h3>
                <p>$765.99</p>
              </span>
            </li>
            <li className={styles["prodcut"]}>
              <img
                src={``}
                alt={``}
                className={styles["related-prodcut__image"]}
              />
              <span className={styles["product_description"]}>
                <h3>Coaster 506222-CO Loveseat</h3>
                <p>$765.99</p>
              </span>
            </li>
            <li className={styles["prodcut"]}>
              <img
                src={``}
                alt={``}
                className={styles["related-prodcut__image"]}
              />
              <span className={styles["product_description"]}>
                <h3>Coaster 506222-CO Loveseat</h3>
                <p>$765.99</p>
              </span>
            </li>
          </ul>
          <span className={styles["btn-carousel"]}>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </span>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
