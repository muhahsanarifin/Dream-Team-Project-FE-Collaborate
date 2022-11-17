import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Profile from './pages/Profile';
import Notification from './pages/Notification';
import Whislist from './pages/Whislist';
// import CardWhislist from './components/CardWhislist';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/forgot', element: <Forgot /> },
  { path: '/profile', element: <Profile /> },
  { path: '/notification', element: <Notification /> },
  { path: '/whislist', element: <Whislist /> },
  // { path: '/cardwhislist', element: <CardWhislist /> },
]);

export default router;
