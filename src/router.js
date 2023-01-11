import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
// import Profile from './pages/Profile';
import Products from "./pages/Products";
// import ProductsDetails from "./pages/ProductDetailsTest";
import ProductDetail from "./pages/ProductDetail";
import Notification from "./pages/Notification";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Tracking from "./pages/Tracking";
import TrackingDetail from "./pages/TrackingDetail";
import ProfileSeller from "./pages/ProfileSeller";
import Profile from "./pages/Profile";
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
import ComingSoon from "./pages/ComingSoon";
import PrivateElement from "./components/PrivateElement";
import PrivateElementSeller from "./components/PrivateElementSeller";
import PrivateElementUser from "./components/PrivateElemetUser";
import ReversePrivateElement from "./components/ReversePrivateElement";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <NotFound /> },
  {
    path: "/login",
    element: (
      <ReversePrivateElement>
        <Login />
      </ReversePrivateElement>
    ),
  },
  {
    path: "/register",
    element: (
      <ReversePrivateElement>
        <Register />
      </ReversePrivateElement>
    ),
  },
  {
    path: "/forgot",
    element: (
      <ReversePrivateElement>
        <Forgot />
      </ReversePrivateElement>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateElement>
        <Profile />
      </PrivateElement>
    ),
  },
  { path: "/products", element: <Products /> },
  // { path: "/products/:id", element: <ProductsDetails /> }, // product detail test
  { path: "/products/:id", element: <ProductDetail /> }, // Change using params
  {
    path: "/notification",
    element: (
      <PrivateElement>
        <Notification />
      </PrivateElement>
    ),
  },
  {
    path: "/cart",
    element: (
      <PrivateElement>
        <Cart />
      </PrivateElement>
    ),
  },
  {
    path: "/checkout",
    element: (
      <PrivateElement>
        <Checkout />
      </PrivateElement>
    ),
  },
  {
    path: "/tracking",
    element: (
      <PrivateElement>
        <Tracking />
      </PrivateElement>
    ),
  },
  {
    path: "/tracking/detail",
    element: (
      <PrivateElement>
        <TrackingDetail />
      </PrivateElement>
    ),
  },
  {
    path: "/profile/seller",
    element: (
      <PrivateElementSeller>
        <ProfileSeller />
      </PrivateElementSeller>
    ),
  },
  {
    path: "/profile/seller/product",
    element: (
      <PrivateElementSeller>
        <MyProduct />
      </PrivateElementSeller>
    ),
  },
  {
    path: "/profile/seller/product/selling",
    element: (
      <PrivateElementSeller>
        <SellingProduct />
      </PrivateElementSeller>
    ),
  },
  {
    path: "/profile/seller/order",
    element: (
      <PrivateElementSeller>
        <MyOrderSeller />
      </PrivateElementSeller>
    ),
  },
  {
    path: "/profile/order",
    element: (
      <PrivateElementUser>
        <MyOrderSeller />
      </PrivateElementUser>
    ),
  },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/detail", element: <BlogDetail /> },
  { path: "/faq", element: <FAQ /> },
  {
    path: "/favorite",
    element: (
      <PrivateElement>
        <Favorite />
      </PrivateElement>
    ),
  },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/soon", element: <ComingSoon /> },
]);

export default router;
