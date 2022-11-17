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

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/profile", element: <Profile /> },
  { path: "/notification", element: <Notification /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/tracking", element: <Tracking /> },
  { path: "/tracking/detail", element: <TrackingDetail /> },
]);

export default router;
