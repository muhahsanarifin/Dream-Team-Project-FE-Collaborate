import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot", element: <Forgot /> },
]);

export default router;
