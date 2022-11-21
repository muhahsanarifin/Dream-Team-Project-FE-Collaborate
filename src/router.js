import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
// import ProductsDetails from "./pages/ProductDetailsTest";
import ProductDetail from "./pages/ProductDetail";
import Notification from "./pages/Notification";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Tracking from "./pages/Tracking";
import TrackingDetail from "./pages/TrackingDetail";
import ProfileSeller from "./pages/ProfileSeller";
import MyProduct from "./pages/MyProduct";
import SellingProduct from "./pages/SellingProduct";
import MyOrderSeller from "./pages/MyOrderSeller";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import Favorite from "./pages/Favorite";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <NotFound /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/profile", element: <Profile /> },
  { path: "/products", element: <Products /> },
  // { path: "/products/:id", element: <ProductsDetails /> },
  { path: "/products/detail/:id", element: <ProductDetail /> }, // Change using params
  { path: "/notification", element: <Notification /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/tracking", element: <Tracking /> },
  { path: "/tracking/detail", element: <TrackingDetail /> },
  { path: "/profile/seller", element: <ProfileSeller /> },
  { path: "/profile/seller/product", element: <MyProduct /> },
  { path: "/profile/seller/product/selling", element: <SellingProduct /> },
  { path: "/profile/seller/order", element: <MyOrderSeller /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/detail", element: <BlogDetail /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/favorite", element: <Favorite /> },
  { path: "/aboutus", element: <AboutUs /> },
]);

export default router;
