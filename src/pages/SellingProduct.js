import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/SellingProduct.module.css";
import Axios from "axios";
import Swal from "sweetalert2";

import chev from "../assets/chevrongrey.png";
// import product from "../assets/product4.png";
import add from "../assets/add.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const token = useSelector((state) => state.auth.userInfo.token);
  const [form, setForm] = useState({
    price: undefined,
    product_name: undefined,
    category_id: [],
    brand_id: undefined,
    size_id: undefined,
    color_id: undefined,
    description_product: undefined,
    stock: undefined,
    sold: undefined,
    conditions: undefined,
    image: {},
  });

  useEffect(() => {
    document.title = "Selling Product";
  }, []);

  const handleChange = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const handleFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setForm({
        ...form,
        image: URL.createObjectURL(e.target.files[0]),
      });
    }
    setForm({
      ...form,
      file: e.target.files[0],
    });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const url = `https://dream-team-project-be.vercel.app/raz/product`;
    const formdata = new FormData();
    formdata.append("product_name", form.product_name);
    formdata.append("description_product", form.description_product);
    formdata.append("price", form.price);
    formdata.append("conditions", form.conditions);
    formdata.append("brand_id", form.brand_id);
    formdata.append("color_id", form.color_id);
    formdata.append("image", form.file);
    formdata.append("category_id", form.category_id);
    formdata.append("size_id", form.size_id);
    formdata.append("sold", form.sold);
    formdata.append("stock", form.stock);
    const body = formdata;
    const config = {
      headers: {
        "x-access-token": token,
      },
    };
    Axios.post(url, body, config)
      .then((res) => {
        Swal.fire({
          title: "Product added successfully!",
          timer: 2000,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            window.location.reload();
          }
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Oops! Something went wrong",
          showConfirmButton: false,
          timer: 1000,
        });
      });
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
                value={form.price}
                onChange={(e) => handleChange(e, "price")}
              />
              <input
                className={styles["input-1"]}
                type="text"
                placeholder="Unit Stock *"
                value={form.stock}
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
              <h1 className={styles["sell-header-1"]}>Photo of Goods</h1>
              <div className={styles["product-div"]}>
                {form.image === undefined ? (
                  <label htmlFor="upload" className={styles["add-div"]}>
                    <img className={styles["add"]} src={add} alt="img" />
                    <p className={styles["add-text"]}>Add more image</p>
                  </label>
                ) : (
                  <div className={styles["product-div"]}>
                    <label htmlFor="upload">
                      <img
                        className={styles["product-img"]}
                        src={form.image}
                        alt="img"
                      />
                    </label>
                    <label htmlFor="upload" className={styles["add-div"]}>
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
                onChange={(e) => {
                  handleFile(e);
                }}
              />
              <form onSubmit={handleSubmit2}>
                <button type="submit" className={styles["sell-btn"]}>
                  Sell Product
                </button>
              </form>
            </section>
          </section>
          <Footer />
        </main>
      </main>
    </>
  );
}
