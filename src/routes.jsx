import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Users from './pages/Users';
import SignInUsers from './pages/SignInUsers';
import DetailMap from './pages/Details/DetailMap';
import Detail from './pages/details/Detail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      

      <Route path="signinusers" element={<SignInUsers />} />
      <Route path="products/:id" element={<Detail />} />
      <Route path="pickupplace/:id" element={<DetailMap />} />

      <Route path="users/:id" element={<Users />} />

    </>
  )
);

export default router;