import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/ProductDetail.module.css";
import Heart from "../assets/love-white.png";
import delivery_fast from "../assets/delivery-fast.png";
import measurement from "../assets/measurement.png";
import pin_check from "../assets/pin-check.png";
import iconFb from "../assets/1.png";
import iconTwit from "../assets/2.png";
import iconYt from "../assets/3.png";

// import counterActions from "../redux/action/counterProduct";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../redux/action/product";
import cart from "../redux/action/cart";
import Swal from "sweetalert2";

const ProductDetail = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  // const counters = useSelector((state) => state.counter.number);
  const cartData = useSelector((state) => state.cart.data);
  const image = useSelector((state) => state.products.productsDetails.images);
  const category = useSelector(
    (state) => state.products.productsDetails.categories
  );
  const productDetail = useSelector((state) => state.products.productsDetails);
  const relatedProduct = useSelector((state) => state.products.productRelated);

  console.log(relatedProduct);

  const rupiah = (number) => {
    if (number) {
      return `IDR ${number
        .toString()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`;
    }
  };

  const { id } = useParams();

  // const onClickHandler = (action) => {
  //   dispatch(action);
  //   console.log(counter);
  // };

  const handleAddCart = () => {
    const filter = cartData.filter(
      (item) => item.product_id === productDetail.id
    );
    
    if (filter?.length > 0) {
      return Swal.fire({
        title: "product sudah dalam keranjang",
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
    }

    const { price } = productDetail;
    const quantity = counter;
    const total_price = price * quantity;
    const data = {
      product_id: productDetail.id,
      image: image[0],
      product_name: productDetail.product_name,
      price: productDetail.price,
      seller_id: productDetail.user_id,
      quantity: counter,
      total_price: total_price,
    };

    const body = [...cartData, data];
    console.log("body", body);
    dispatch(cart.addCartThunk(body));

    return Swal.fire({
      title: "success add to cart",
      timer: 2000,
      showConfirmButton: false,
      timerProgressBar: true,
    });
  };

  useEffect(() => {
    dispatch(productActions.getProductDetailThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(productActions.getRelatedProductThunk(id));
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
          <div className={styles["product-detail__images"]}>
            <div className={styles["product-detail__images-left-side"]}>
              {image?.length > 0 &&
                image?.map((item, index) => {
                  return <img src={item} alt="list_product_1" />
                })}
            </div>
            <span className={styles["product-detail__images-right-side"]}>
              <img className={styles["image_product"]} src={image[0]} alt={`list_product`} />
            </span>
          </div>
          <div className={styles["content-product"]}>
            <span className={styles["product-detail__descriptions"]}>
              <h3 className={styles["product-detail__descriptions__titles"]}>
                {productDetail.product_name}
              </h3>
              <span className={styles["ratings"]}>{`2 (review)`}</span>
              <span className={styles["price-and-sold-history"]}>
                <p className={styles["price"]}>{rupiah(productDetail.price)}</p>
                <p className={styles["sold"]}>
                  {productDetail.sold} Sold / {productDetail.stock} In Stock
                </p>
              </span>
              <p className={styles[["description"]]}>
                {productDetail.description_product}
              </p>
            </span>
            <span className={styles["components"]}>
              <ul className={styles["qty"]}>
                <li
                  onClick={() => setCounter(counter - 1)}
                  className={`${styles["pointer"]}`}
                >
                  -
                </li>
                <li>{counter}</li>
                <li
                  onClick={() => setCounter(counter + 1)}
                  className={`${styles["pointer"]}`}
                >
                  +
                </li>
              </ul>
              <button onClick={handleAddCart} className={styles["add-to-cart"]}>
                {" "}
                Add to cart
              </button>
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
              <p>
                Categories:
                {category?.length > 0 &&
                  category?.map((item, index, array) => {
                    if (category?.length - 1 === index) {
                      return item;
                    } else {
                      return ` ${item}, `;
                    }
                  })}
              </p>
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
              <img src={iconFb} alt={`facebook`} />
              <img src={iconTwit} alt={`twitter`} />
              <img src={iconYt} alt={`youtube`} />
            </span>
          </div>
        </section>
        <section>
          <span className={styles["lists-section"]}>
            <ul className={styles["lists"]}>
              <li>Description</li>
              <li>Review</li>
              <li>Additional Information</li>
              <li>About Brand</li>
              <li>Shipping & Delivery</li>
            </ul>
          </span>
          <span className={styles["images-description"]}>
            <img src={image[0]} alt={``} />
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
            {relatedProduct?.length > 0 &&
              relatedProduct?.map((item, index) => {
                return (
                  <li className={styles["prodcut"]}>
                    <div>
                      <img
                        onClick={() => {
                          navigate(`/products/${item.id}`)
                        }}
                        src={item.image}
                        alt={`related2`}
                        className={styles["related-prodcut__image"]}
                      />
                      <span className={styles["product_description"]}>
                        <h3>{item.product_name}</h3>
                        <p>Rp.{item.price}</p>
                      </span>
                    </div>
                  </li>
                );
              })}
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
