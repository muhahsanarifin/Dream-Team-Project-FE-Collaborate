import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Profile from "./pages/Profile";
import Notification from "./pages/Notification";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Tracking from "./pages/tracking";
import TrackingDetail from "./pages/TrackingDetail";
import ProfileSeller from "./pages/ProfileSeller";
import MyProduct from "./pages/MyProduct";
import SellingProduct from "./pages/SellingProduct";
import MyOrderSeller from "./pages/MyOrderSeller";
import FAQ from "./pages/FAQ";
import Favorite from "./pages/Favorite";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <NotFound /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/profile", element: <Profile /> },
  { path: "/notification", element: <Notification /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/tracking", element: <Tracking /> },
  { path: "/tracking/detail", element: <TrackingDetail /> },
  { path: "/profile/seller", element: <ProfileSeller /> },
  { path: "/profile/seller/product", element: <MyProduct /> },
  { path: "/profile/seller/product/selling", element: <SellingProduct /> },
  { path: "/profile/seller/order", element: <MyOrderSeller /> },
  { path: "/FAQ", element: <FAQ /> },
  { path: "/favorite", element: <Favorite /> },
]);

export default router;
