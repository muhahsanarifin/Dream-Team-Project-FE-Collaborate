import React, { useEffect, useState } from "react";
import { Link , useNavigate , useParams } from "react-router-dom";

// import css
import css from "../styles/ProductDetails.module.css";

// import components
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardProductDetail from "../components/CardProductDetail";
import counterActions from "../redux/action/counterProduct";
// import image
// import list_product_1 from "../assets/Mask (1).png";
// import list_product_2 from "../assets/Mask.png";
import hot_label from "../assets/add.png";
import { getData } from "../utils/fetcher";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../redux/action/product";

function Productdetail() {
  const navigate = useNavigate()
  const counters = useSelector((state) => state.counter.number);
  // const counters = useSelector((state) => state.counter.number);
  console.log(counters);
  const { id } = useParams();
  // const [product, setProduct] = useState({});
  // const [image, setImage] = useState([])
  const dispatch = useDispatch();
  const image = useSelector((state) => state.products.productsDetails.images)
  console.log(image);
  // const fetchData = async () => {
  //   try {
  //     console.log("res");
  //     const res = await getData(`raz/product/${id}`);
  //     console.log(res);
  //     setProduct(res.data.data);
  //     setImage(res.data.data.images)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const onClickHandler = (action) => {
    dispatch(action);
    // console.log(counter);
  };

  useEffect(() => {
    dispatch(productActions.getProductDetailThunk(id));
  }, [dispatch])
  
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className={`container-fluid ${css["content-bar"]}`}>
        <nav className={css.bar}>
          <section className={css.title_product_shop}>
            Shop <i className="fa-solid fa-angle-right"></i>
            <span>
              <Link className={css.title_product} to="#">
                Shop Right Sidebar <i className="fa-solid fa-angle-right"></i>
              </Link>
            </span>
            <span>
              <Link className={css.title_product} to="#">
                Product
              </Link>
            </span>
          </section>
        </nav>
      </div>

      {/* Content Picture */}
      <div className={`container ${css.content_product_preview}`}>
        <div className={`row ${css["c-product"]}`}>
          <div className={`col-lg-3 col-md-12 ${css.list_product}`}>
            {image.length > 0 &&
              image.map((item, index) => {
              return <img src={item} alt="list_product_1" />;
            })}
          </div>
          <div className={`col-lg-9 col-md-12 ${css.product_preview}`}>
            <img
              src={image[0]}
              alt="list_product"
              className={`${css.preview}`}
            />
            <img src={hot_label} alt="list_product" className={`${css.hot}`} />
          </div>
        </div>
      </div>

      {/* detail product */}
      <div className={`container ${css["c-detail"]}`}>
        <p className={`${css.detail_title}`}>
          Coaster Home Furnishings Sofa in Oatmeal
        </p>
        <div className={`${css.detail_review}`}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <span className={`${css.view}`}>2 (reviews)</span>
        </div>
        <div className={`${css.detail_price}`}>
          <span className={`${css.detail_price_price}`}>$765.99</span>
          <i className="fa-regular fa-circle-check"></i>
          <span className={`${css.detail_price_stock}`}>
            19 Sold / 40 In Stock
          </span>
        </div>
        <div className={`${css.detail_desc}`}>
          <p>
            Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
            Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices
            exurabitur ut magna dignissim, dignissiNullam vitae venenatis elit.
            Proin dui lacus, viverra at imperdiet non, facilisis eget orci.
            Vivamus ac elit tellus. Vestibulum nulla dui, consequat vitae diam
            eu, pretium finibus libero. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Aliquam vitae
            neque tellus.
          </p>
        </div>

        <div className={`${css.detail_submit}`}>
          {/* button + or - product */}
          <div className={` ${css["add-product"]}`}>
            <button>
              <i onClick={() => onClickHandler(counterActions.counterDown())} className="fa-solid fa-minus">&#45;</i>
            </button>
            <input className="px-1" type="text" value= {counters} />
            <button>
              <i onClick={() => onClickHandler(counterActions.counterUp())} className="fa-solid fa-plus">&#43;</i>
            </button>
          </div>
          {/* add to cart */}
          <div className={`${css.add_cart}`}>
            <button onClick={() => {
              navigate("/cart")
            }}>Add to cart</button>
          </div>
          {/* add favorite */}
          <div className={`${css.favorite}`}>
            <button>
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
          {/* add wistlist*/}
          <div className={`${css.add_wistlist}`}>
            <button>Add to wistlist</button>
          </div>
        </div>
      </div>

      <div className={`container ${css.detail_list}`}>
        <p>SKU: N/A</p>
        <p>Categories: Furniture, Interior, Chair</p>
        <p>Tag: Furniture, Chair, Scandinavian, Modern</p>
        <p>Product ID: 274</p>
      </div>

      <div className={`container ${css["detail-location"]}`}>
        <div className={`${css.location}`}>
          <i className="fa-solid fa-truck"></i>
          <p>Delivery and return</p>
        </div>
        <div className={`${css.location}`}>
          <i className="fa-solid fa-ruler-horizontal"></i>
          <p>Size guides</p>
        </div>
        <div className={`${css.location}`}>
          <i className="fa-solid fa-location-dot"></i>
          <p>Store availability</p>
        </div>
      </div>

      <div className={`container ${css.sosial_media}`}>
        <div className={`${css["icon-style"]}`}>
          <span className={`${css["facebook-container"]}`}>
            <i className="fa-brands fa-facebook-f"></i>
          </span>
          <span>
            <i className="fa-brands fa-twitter"></i>
          </span>
          <span>
            <i className="fa-brands fa-youtube"></i>
          </span>
        </div>
      </div>

      {/* Navbar product detail */}
      <div className={`container ${css["detail-bar-product"]}`}>
        <div className={`${css["bar-product-detail"]}`}>
          <p /* onClick={toDescription} */>Description</p>
          <p /* onClick={toReview} */>Review</p>
          <p>Additional Information</p>
          <p>About Brand</p>
          <p>Shipping & Delivery</p>
        </div>
      </div>

      <CardProductDetail />

      {/* footer */}
      <Footer />
    </>
  );
}

export default Productdetail;
