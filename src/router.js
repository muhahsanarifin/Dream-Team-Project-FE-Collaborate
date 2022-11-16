import { createBrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Notification from './pages/Notification';

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path: '/notification', element: <Notification /> },
]);

export default router;
