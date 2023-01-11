import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/SellingProduct.module.css";
// import Axios from "axios";
// import Swal from "sweetalert2";

import chev from "../assets/chevrongrey.png";
// import product from "../assets/product4.png";
import add from "../assets/add.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import productActions from "../redux/action/product";
import Loading from "../components/LoadingBtn";

export default function SellingProducts() {
  // constructor(props) {
  //   super(props);
  //   form = {
  //     product_name: undefined,
  //     description_product: undefined,
  //     price: undefined,
  //     stock: undefined,
  //     conditions: undefined,
  //     color_id: undefined,
  //     brand_id: undefined,
  //     image: undefined,
  //     file: undefined,
  //     category_id: "[1]",
  //     size_id: 1,
  //     sold: 0,
  //   };
  //   this.handleSubmit2 = this.handleSubmit2.bind(this);
  // }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userInfo.token);
  const isLoading = useSelector((state) => state.products.isLoading);
  const refTarget = useRef(null);
  const [imagePreview, setImagePreview] = useState([]);
  const [form, setForm] = useState({
    price: 0,
    product_name: "",
    category_id: [],
    brand_id: 0,
    size_id: 0,
    color_id: 0,
    description_product: "",
    stock: 0,
    sold: 0,
    conditions: "",
    image: [],
    file: "",
  });
  console.log(form);
  useEffect(() => {
    document.title = "Selling Product";
  }, [form.category_id]);

  const handleChange = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  // const handleFile = (e) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setForm({
  //       ...form,
  //       image: URL.createObjectURL(e.target.files[0]),
  //     });
  //   }
  //   setForm({
  //     ...form,
  //     file: e.target.files[0],
  //   });
  // };

  const imageHandler = (e) => {
    const photo = e.target.files[0];
    const defaultSize = 2 * 1024 * 1024;
    if (
      photo.type !== "image/jpeg" &&
      photo.type !== "image/jpg" &&
      photo.type !== "image/png"
    )
      return toast.error("Only receive .jpeg, .jpg, .png file");
    if (photo.size > defaultSize)
      return toast.error("File are too large, max size are 2 Mb");
    setForm({ ...form });
    form.image.push(e.target.files[0]);
    setImagePreview([...imagePreview]);
    console.log(URL.createObjectURL(e.target.files[0]).toString());
    imagePreview.push(URL.createObjectURL(e.target.files[0]).toString());
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const url = `http://localhost:8090/raz/product`;
    const formdata = new FormData();
    formdata.append("product_name", form.product_name);
    formdata.append("description_product", form.description_product);
    formdata.append("price", form.price);
    formdata.append("conditions", form.conditions);
    formdata.append("brand_id", form.brand_id);
    formdata.append("color_id", form.color_id);
    formdata.append("category_id", form.category_id);
    formdata.append("size_id", form.size_id);
    formdata.append("sold", form.sold);
    formdata.append("stock", form.stock);
    form.image.forEach((image) => {
      formdata.append("image", image);
    });
    // const body = formdata;
    for (const pair of formdata.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    const success = () => {
      toast.success("Product successfully created", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      setTimeout(() => {
        navigate("/profile/seller");
      }, 500);
    };
    dispatch(productActions.createProductThunk(formdata, token, success));
  };

  return (
    <>
      <main className={styles["main-2"]}>
        <main className={styles["main"]}>
          <Header />
          <section className={styles["section-1"]}>
            <h1 className={styles["section-1-header"]}>Selling Product</h1>
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
                <div className={styles["nav-div-2"]}>
                  <p>My Product</p>
                  <img className={styles["chev"]} src={chev} alt="img" />
                </div>
              </div>
              <div>
                <p
                  className={styles["nav-div-1"]}
                  onClick={() => {
                    navigate("/profile/seller/product/selling");
                  }}
                >
                  Selling Product
                </p>
                <div className={styles["nav-line"]}></div>
              </div>
              <p
                className={styles["nav-div-2"]}
                onClick={() => {
                  navigate("/profile/seller/order");
                }}
              >
                My Order
              </p>
            </div>
            <section className={styles["product-section"]}>
              <h1 className={styles["sell-header-1"]}>Inventory</h1>
              <input
                className={styles["input-1"]}
                type="text"
                placeholder="Name of goods *"
                value={form.product_name}
                name="product_name"
                onChange={(e) => handleChange(e, "product_name")}
              />
              <input
                className={styles["input-2"]}
                type="text"
                placeholder="Description Product *"
                value={form.description_product}
                name="description_product"
                onChange={(e) => handleChange(e, "description_product")}
              />
              <h1 className={styles["sell-header-1"]}>Item Details</h1>
              <input
                className={styles["input-1"]}
                type="text"
                placeholder="Unit price *"
                value={form.price === 0 ? "" : form.price}
                onChange={(e) => handleChange(e, "price")}
              />
              <input
                className={styles["input-1"]}
                type="text"
                placeholder="Unit Stock *"
                value={form.stock === 0 ? "" : form.stock}
                onChange={(e) => handleChange(e, "stock")}
              />
              <p className={styles["sell-text-1"]}>Stock Condition</p>
              <div className={styles["condition-div"]}>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="condition"
                    onClick={() => {
                      setForm({
                        ...form,
                        conditions: "new",
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>New Product</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="condition"
                    onClick={() => {
                      setForm({
                        ...form,
                        conditions: "second",
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>Second Product</p>
                </div>
              </div>
              <p className={styles["sell-text-1"]}>Brands</p>
              <div className={styles["condition-div"]}>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="brand"
                    onClick={() => {
                      setForm({
                        ...form,
                        brand_id: 1,
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>IKEA</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="brand"
                    onClick={() => {
                      setForm({
                        ...form,
                        brand_id: 6,
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>Informa</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="brand"
                    onClick={() => {
                      setForm({
                        ...form,
                        conditions: 3,
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>Sweet House</p>
                </div>{" "}
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="brand"
                    onClick={() => {
                      setForm({
                        ...form,
                        conditions: 5,
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>Mr.Poppin 1929</p>
                </div>
              </div>
              <p className={styles["sell-text-1"]}>COLOR</p>
              <div className={styles["condition-div"]}>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="color"
                    onClick={() => {
                      setForm({
                        ...form,
                        color_id: 2,
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>BLUE</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="color"
                    onClick={() => {
                      setForm({
                        ...form,
                        color_id: 1,
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>DJON</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="color"
                    onClick={() => {
                      setForm({
                        ...form,
                        color_id: 7,
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>RED</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="color"
                    onClick={() => {
                      setForm({
                        ...form,
                        color_id: 5,
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>GREEN</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="color"
                    onClick={() => {
                      setForm({
                        ...form,
                        color_id: 8,
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>BLACK</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="color"
                    onClick={() => {
                      setForm({
                        ...form,
                        color_id: 9,
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>MUSTARD</p>
                </div>
              </div>
              <p className={styles["sell-text-1"]}>CATEGORY</p>
              <div className={styles["condition-div"]}>
                <div className={styles["condition-subdiv"]}>
                  <button
                    className={
                      form.category_id.includes(1)
                        ? styles["radio-checked"]
                        : styles["radio"]
                    }
                    onClick={() => {
                      setForm({
                        ...form,
                      });
                      if (form.category_id.includes(1)) {
                        form.category_id.splice(form.category_id.indexOf(1), 1);
                      } else {
                        form.category_id.push(1);
                      }
                      console.log(form.category_id);
                    }}
                  />
                  <p className={styles["sell-text-2"]}>ACCESSORIES</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <button
                    className={
                      form.category_id.includes(2)
                        ? styles["radio-checked"]
                        : styles["radio"]
                    }
                    onClick={() => {
                      setForm({
                        ...form,
                      });
                      if (form.category_id.includes(2)) {
                        form.category_id.splice(form.category_id.indexOf(2), 1);
                      } else {
                        form.category_id.push(2);
                      }
                      console.log(form.category_id);
                    }}
                  />
                  <p className={styles["sell-text-2"]}>BRANDS</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <button
                    className={
                      form.category_id.includes(3)
                        ? styles["radio-checked"]
                        : styles["radio"]
                    }
                    onClick={() => {
                      setForm({
                        ...form,
                      });
                      if (form.category_id.includes(3)) {
                        form.category_id.splice(form.category_id.indexOf(3), 1);
                      } else {
                        form.category_id.push(3);
                      }
                      console.log(form.category_id);
                    }}
                  />
                  <p className={styles["sell-text-2"]}>CLOTHING</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <button
                    className={
                      form.category_id.includes(4)
                        ? styles["radio-checked"]
                        : styles["radio"]
                    }
                    onClick={() => {
                      setForm({
                        ...form,
                      });
                      if (form.category_id.includes(4)) {
                        form.category_id.splice(form.category_id.indexOf(4), 1);
                      } else {
                        form.category_id.push(4);
                      }
                      console.log(form.category_id);
                    }}
                  />
                  <p className={styles["sell-text-2"]}>FASHION</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <button
                    className={
                      form.category_id.includes(5)
                        ? styles["radio-checked"]
                        : styles["radio"]
                    }
                    onClick={() => {
                      setForm({
                        ...form,
                      });
                      if (form.category_id.includes(5)) {
                        form.category_id.splice(form.category_id.indexOf(5), 1);
                      } else {
                        form.category_id.push(5);
                      }
                      console.log(form.category_id);
                    }}
                  />
                  <p className={styles["sell-text-2"]}>FURNITURE</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <button
                    className={
                      form.category_id.includes(6)
                        ? styles["radio-checked"]
                        : styles["radio"]
                    }
                    onClick={() => {
                      setForm({
                        ...form,
                      });
                      if (form.category_id.includes(6)) {
                        form.category_id.splice(form.category_id.indexOf(6), 1);
                      } else {
                        form.category_id.push(6);
                      }
                      console.log(form.category_id);
                    }}
                  />
                  <p className={styles["sell-text-2"]}>MEN</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <button
                    className={
                      form.category_id.includes(7)
                        ? styles["radio-checked"]
                        : styles["radio"]
                    }
                    onClick={() => {
                      setForm({
                        ...form,
                      });
                      if (form.category_id.includes(7)) {
                        form.category_id.splice(form.category_id.indexOf(7), 1);
                      } else {
                        form.category_id.push(7);
                      }
                      console.log(form.category_id);
                    }}
                  />
                  <p className={styles["sell-text-2"]}>WOMAN</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <button
                    className={
                      form.category_id.includes(8)
                        ? styles["radio-checked"]
                        : styles["radio"]
                    }
                    onClick={() => {
                      setForm({
                        ...form,
                      });
                      if (form.category_id.includes(8)) {
                        form.category_id.splice(form.category_id.indexOf(8), 1);
                      } else {
                        form.category_id.push(8);
                      }
                      console.log(form.category_id);
                    }}
                  />
                  <p className={styles["sell-text-2"]}>SHOES</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <button
                    className={
                      form.category_id.includes(9)
                        ? styles["radio-checked"]
                        : styles["radio"]
                    }
                    onClick={() => {
                      setForm({
                        ...form,
                      });
                      if (form.category_id.includes(9)) {
                        form.category_id.splice(form.category_id.indexOf(9), 1);
                      } else {
                        form.category_id.push(9);
                      }
                      console.log(form.category_id);
                    }}
                  />
                  <p className={styles["sell-text-2"]}>WALLETS</p>
                </div>
              </div>
              <p className={styles["sell-text-1"]}>SIZE</p>
              <div className={styles["condition-div"]}>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="color"
                    onClick={() => {
                      setForm({
                        ...form,
                        size_id: 1,
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>S</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="color"
                    onClick={() => {
                      setForm({
                        ...form,
                        size_id: 2,
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>M</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="color"
                    onClick={() => {
                      setForm({
                        ...form,
                        size_id: 3,
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>L</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="color"
                    onClick={() => {
                      setForm({
                        ...form,
                        size_id: 4,
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>XL</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="color"
                    onClick={() => {
                      setForm({
                        ...form,
                        size_id: 5,
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>XXL</p>
                </div>
                <div className={styles["condition-subdiv"]}>
                  <input
                    className={styles["radio"]}
                    type="radio"
                    name="color"
                    onClick={() => {
                      setForm({
                        ...form,
                        size_id: 6,
                      });
                    }}
                  />
                  <p className={styles["sell-text-2"]}>ALL SIZE</p>
                </div>
              </div>
              <h1 className={styles["sell-header-1"]}>Photo of Goods</h1>
              <div className={styles["product-div"]}>
                {form.image === "" ? (
                  <label htmlFor="upload" className={styles["add-div"]}>
                    <img className={styles["add"]} src={add} alt="img" />
                    <p className={styles["add-text"]}>Add more image</p>
                  </label>
                ) : (
                  <div className={styles["product-div"]}>
                    {form.image.map((item) => {
                      return (
                        <label htmlFor="upload">
                          <img
                            className={styles["product-img"]}
                            src={URL.createObjectURL(item)}
                            alt="img"
                          />
                        </label>
                      );
                    })}
                    <label
                      htmlFor="upload"
                      className={styles["add-div"]}
                      onClick={(e) => {
                        e.preventDefault();
                        refTarget.current.click();
                      }}
                    >
                      <img className={styles["add"]} src={add} alt="img" />
                      <p className={styles["add-text"]}>Add more image</p>
                    </label>
                  </div>
                )}
              </div>
              <input
                type="file"
                name="file"
                id="upload"
                className={styles["none"]}
                ref={refTarget}
                onChange={(e) => {
                  imageHandler(e);
                  console.log(e.target.files[0]);
                }}
              />
              <form onSubmit={handleSubmit2}>
                {isLoading ? (
                  <div className={styles["button"]}>
                    <Loading />
                  </div>
                ) : (
                  <button type="submit" className={styles["sell-btn"]}>
                    Sell Product
                  </button>
                )}
              </form>
            </section>
          </section>
          <Footer />
        </main>
      </main>
    </>
  );
}
