import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/profile", element: <Profile /> },
]);

export default router;
