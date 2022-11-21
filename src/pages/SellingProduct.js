import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/SellingProduct.module.css";
import withNavigate from "../helpers/withNavigate";
import Axios from "axios";
import Swal from "sweetalert2";

import chev from "../assets/chevrongrey.png";
// import product from "../assets/product4.png";
import add from "../assets/add.png";

class SellingProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: undefined,
      description_product: undefined,
      price: undefined,
      stock: undefined,
      conditions: undefined,
      color_id: undefined,
      brand_id: undefined,
      image: undefined,
      file: undefined,
      category_id: "[1]",
      size_id: 1,
      sold: 0,
    };
    this.handleSubmit2 = this.handleSubmit2.bind(this);
  }

  componentDidMount() {
    document.title = "Selling Product";
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  handleFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
    this.setState({
      file: event.target.files[0],
    });
  }

  handleSubmit2(event) {
    event.preventDefault();
    const url = `https://dream-team-project-be.vercel.app/raz/product`;
    const formdata = new FormData();
    // const body = {
    //   username: this.state.username,
    //   gender: this.state.gender,
    //   store_description: this.state.desc,
    //   image: this.state.file,
    // };
    formdata.append("product_name", this.state.product_name);
    formdata.append("description_product", this.state.description_product);
    formdata.append("price", this.state.price);
    formdata.append("conditions", this.state.conditions);
    formdata.append("brand_id", this.state.brand_id);
    formdata.append("color_id", this.state.color_id);
    formdata.append("image", this.state.file);
    formdata.append("category_id", this.state.category_id);
    formdata.append("size_id", this.state.size_id);
    formdata.append("sold", this.state.sold);
    formdata.append("stock", this.state.stock);
    const body = formdata;
    const config = {
      headers: {
        "x-access-token": localStorage.getItem("token"),
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
  }

  render() {
    return (
      <Fragment>
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
                    this.props.navigate("/profile/seller");
                  }}
                >
                  Profile
                </p>
                <div
                  onClick={() => {
                    this.props.navigate("/profile/seller/product");
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
                      this.props.navigate("/profile/seller/product/selling");
                    }}
                  >
                    Selling Product
                  </p>
                  <div className={styles["nav-line"]}></div>
                </div>
                <p
                  className={styles["nav-div-2"]}
                  onClick={() => {
                    this.props.navigate("/profile/seller/order");
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
                  value={this.state.product_name}
                  onChange={(event) => this.handleChange(event, "product_name")}
                />
                <input
                  className={styles["input-2"]}
                  type="text"
                  placeholder="Description Product *"
                  value={this.state.description_product}
                  onChange={(event) =>
                    this.handleChange(event, "description_product")
                  }
                />
                <h1 className={styles["sell-header-1"]}>Item Details</h1>
                <input
                  className={styles["input-1"]}
                  type="text"
                  placeholder="Unit price *"
                  value={this.state.price}
                  onChange={(event) => this.handleChange(event, "price")}
                />
                <input
                  className={styles["input-1"]}
                  type="text"
                  placeholder="Unit Stock *"
                  value={this.state.stock}
                  onChange={(event) => this.handleChange(event, "stock")}
                />
                <p className={styles["sell-text-1"]}>Stock Condition</p>
                <div className={styles["condition-div"]}>
                  <div className={styles["condition-subdiv"]}>
                    <input
                      className={styles["radio"]}
                      type="radio"
                      name="condition"
                      onClick={() => {
                        this.setState({ conditions: "new" });
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
                        this.setState({ conditions: "second" });
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
                        this.setState({ brand_id: 1 });
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
                        this.setState({ brand_id: 6 });
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
                        this.setState({ conditions: 3 });
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
                        this.setState({ conditions: 5 });
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
                        this.setState({ color_id: 2 });
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
                        this.setState({ color_id: 1 });
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
                        this.setState({ color_id: 7 });
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
                        this.setState({ color_id: 5 });
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
                        this.setState({ color_id: 8 });
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
                        this.setState({ color_id: 9 });
                      }}
                    />
                    <p className={styles["sell-text-2"]}>MUSTARD</p>
                  </div>
                </div>
                <h1 className={styles["sell-header-1"]}>Photo of Goods</h1>
                <div className={styles["product-div"]}>
                  {this.state.image === undefined ? (
                    <label for="upload" className={styles["add-div"]}>
                      <img className={styles["add"]} src={add} alt="img" />
                      <p className={styles["add-text"]}>Add more image</p>
                    </label>
                  ) : (
                    <div className={styles["product-div"]}>
                      <label for="upload">
                        <img
                          className={styles["product-img"]}
                          src={this.state.image}
                          alt="img"
                        />
                      </label>
                      <label for="upload" className={styles["add-div"]}>
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
                  onChange={(event) => {
                    this.handleFile(event);
                    // console.log(event);
                  }}
                />
                <form onSubmit={this.handleSubmit2}>
                  <button type="submit" className={styles["sell-btn"]}>
                    Sell Product
                  </button>
                </form>
              </section>
            </section>
            <Footer />
          </main>
        </main>
      </Fragment>
    );
  }
}

const SellingProduct = withNavigate(SellingProducts);

export default SellingProduct;
