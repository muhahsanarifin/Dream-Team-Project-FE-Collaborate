import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/ProductDetail.module.css";
import Heart from "../assets/love-white.png";
import delivery_fast from "../assets/delivery-fast.png"
import measurement from "../assets/measurement.png"
import pin_check from "../assets/pin-check.png"

import CardProductDetail from "../components/CardProductDetailTest";
import counterActions from "../redux/action/counterProduct";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../redux/action/product";

const ProductDetail = () => {
  const dispatch = useDispatch();

  const counters = useSelector((state) => state.counter.number);
  const image = useSelector((state) => state.products.productsDetails.images);
  const productDetail = useSelector((state) => state.products.productsDetails);

  const rupiah = (number) => {
    if (number) {
      return `IDR ${number
        .toString()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`;
    }
  };

  const { id } = useParams();

  const onClickHandler = (action) => {
    dispatch(action);
    // console.log(counter);
  };

  useEffect(() => {
    dispatch(productActions.getProductDetailThunk(id));
  }, [dispatch, id]);

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
              {/* <li>
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
              </li> */}
              {image.length > 0 &&
                image.map((item, index) => {
                  return <img src={item} alt="list_product_1" />;
                })}
            </ul>
            <span className={styles["product-detail__images-right-side"]}>
              <img src={image[0]} alt={`list_product`} />
            </span>
          </span>
          <span className={styles["product-detail__descriptions"]}>
            <h3 className={styles["product-detail__descriptions__titles"]}>
              {productDetail.product_name}
            </h3>
            <span className={styles["ratings"]}>{`2 (review)`}</span>
            <span className={styles["price-and-sold-history"]}>
              <p className={styles["price"]}>{rupiah(productDetail.price)}</p>
              <p className={styles["sold"]}>{productDetail.sold} Sold / {productDetail.stock} In Stock</p>
            </span>
            <p className={styles[["description"]]}>
              {productDetail.description_product}
            </p>
          </span>

          <span className={styles["components"]}>
            <ul className={styles["qty"]}>
              <li onClick={() => onClickHandler(counterActions.counterDown())}>
                -
              </li>
              <li>{counters}</li>
              <li onClick={() => onClickHandler(counterActions.counterUp())}>
                +
              </li>
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
            <p>Categories: {productDetail.category}</p>
            <p>Tag: Furniture, Chair, Scandinavian, Modern</p>
            <p>Product ID: {productDetail.id}</p>
          </span>
          <span className={styles["deliveries"]}>
            <ul>
              <li>
                <img src={delivery_fast} alt={``} />
                <p>Delivery and return</p>
              </li>
              <li>
                <img src={measurement} alt={``} />
                <p>Size Guide</p>
              </li>

              <li>
                <img src={pin_check} alt={``} />
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
        <CardProductDetail />
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
